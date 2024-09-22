import React, { useEffect, useState } from 'react';
import { FaPlus, FaXmark } from "react-icons/fa6";
import FormAdmin from '../FormAdmin';
import { useAddProductMutation, useDelImageMutation, useGetAllBrandsQuery, useGetAllCategoryQuery, useGetCategoryByIdQuery, useUploadImageMutation } from '../../../Store/EmporiumApi';
import { toast } from 'react-toastify';
import { eColors, eGender, eSize } from '../../../Store/enum';

const ProductModal = () => {
    const { data: getCategoryData } = useGetAllCategoryQuery()
    const { data: getBrandsData } = useGetAllBrandsQuery()
    const [sendImage, { data: getImages }] = useUploadImageMutation()
    const [addProduct, { data: getProductData, isError, isSuccess }] = useAddProductMutation()
    const [delImage] = useDelImageMutation()
    const [catId, setCatId] = useState('')
    const { data: getCatId } = useGetCategoryByIdQuery(catId, { skip: !catId })
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [product, setProduct] = useState(true)
    const [formDataInput, setFormDataInput] = useState({
        name: '',
        price: '',
        discount: '',
        category: '',
        subcategory: '',
        size: [],
        color: [],
        brand: '',
        description: '',
        image: [],
    })

    const toggleModal = () => setIsModalOpen(!isModalOpen)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataInput(prev => ({ ...prev, [name]: value }));
        if (name === 'category') setCatId(value);
    }
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('image', file);
            const response = await sendImage(formData).unwrap();
            if (response.file && response.file.location) {
                setFormDataInput(prev => ({ ...prev, image: [...prev.image, response.file.location] }));
                toast.success('File uploaded successfully');
            }
        }
    }
    const handleColorChange = (e) => {
        const selectedColors = Array.from(e.target.selectedOptions, option => option.value);
        setFormDataInput(prevState => ({ ...prevState, color: selectedColors }));
    }

    const handleSizeChange = (e) => {
        const selectedSizes = Array.from(e.target.selectedOptions, option => option.value);
        setFormDataInput(prevState => ({ ...prevState, size: selectedSizes }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formDataInput.name || !formDataInput.price || !formDataInput.category || !formDataInput.subcategory || !formDataInput.brand || !formDataInput.description || formDataInput.image.length === 0) {
            toast.error('Please fill out all fields and upload an image')
        }
        addProduct({
            name: formDataInput.name,
            description: formDataInput.description,
            discount: formDataInput.discount,
            price: formDataInput.price,
            images: formDataInput.image,
            categoryId: formDataInput.category,
            subcategoryId: formDataInput.subcategory,
            brandsId: formDataInput.brand,
            colors: formDataInput.color,
            size: formDataInput.size
        })
        toggleModal()
    }
    const deleteSelectedImage = async (name) => {
        const fileName = name.split('/')[3]
        await delImage({ fileName }).unwrap();
        setFormDataInput(prev => ({
            ...prev, image: prev.image.filter(img => img !== name)
        }));
        toast.success('Image deleted successfully');
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('Product added successfully');
        } else if (isError) {
            toast.error('Failed to add product');
        }
    }, [isSuccess, isError])
    const formFields = [
        { name: 'name', label: 'Name', type: 'text', placeholder: 'Type product name', value: formDataInput.name, onChange: handleChange, colSpan: 'col-span-2' },
        { name: 'price', label: 'Price', type: 'number', placeholder: '999$', value: formDataInput.price, onChange: handleChange, colSpan: 'sm:col-span-1' },
        { name: 'discount', label: 'Discount', type: 'number', placeholder: '15%', value: formDataInput.discount, onChange: handleChange, colSpan: 'sm:col-span-1' },
        {
            name: 'category', label: 'Category', type: 'select', placeholder: 'Select category', value: formDataInput.category, onChange: handleChange,
            options: getCategoryData?.map((category) => ({ value: category.id, label: category.name })), colSpan: 'sm:col-span-1'
        },
        {
            name: 'subcategory', label: 'Subcategory', type: 'select', placeholder: 'Select Subcategory', value: formDataInput.subcategory, onChange: handleChange,
            options: getCatId?.Subcategory.map((subcategory) => ({ value: subcategory.id, label: subcategory.name })) || [], colSpan: 'sm:col-span-1'
        },
        {
            name: 'size', label: 'Size', type: 'select', placeholder: 'Select Size', value: formDataInput.size, onChange: handleSizeChange,
            options: eSize.map((item) => ({ value: item, label: item })) || [], colSpan: 'sm:col-span-1', multiple: true
        },
        {
            name: 'color', label: 'Color', type: 'select', placeholder: 'Select Color', value: formDataInput.color, onChange: handleColorChange,
            options: eColors.map((item) => ({ value: item, label: item })) || [], colSpan: 'sm:col-span-1', multiple: true
        },
        {
            name: 'brand', label: 'Brand', type: 'select', placeholder: 'Select brand', value: formDataInput.brand, onChange: handleChange,
            options: getBrandsData?.map((brand) => ({ value: brand.id, label: brand.name })), colSpan: 'sm:col-span-1'
        },
        { name: 'description', label: 'Product Description', type: 'textarea', placeholder: 'Write product description here', value: formDataInput.description, onChange: handleChange, colSpan: 'col-span-2' },
        { name: 'image', label: 'Product Image', type: 'file', onChange: handleFileChange, colSpan: 'col-span-2' },
    ];

    return (
        <div>
            <button onClick={toggleModal} className="flex items-center gap-2 border-2 text-[#5C67F7] hover:text-white bg-transparent border-[#5C67F7] hover:bg-[#5C67F7] font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                <FaPlus /> Add Products
            </button>
            {isModalOpen && (
                <div tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)]  max-h-full bg-gray-800 bg-opacity-50">
                    <div className="relative p-4 w-full overflow-y-auto max-w-2xl max-h-[500px] shadow-2xl bg-[#1F2937] rounded-lg border  border-[#374151]">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-lg font-semibold text-white">Create New Product</h3>
                            <button onClick={toggleModal} type="button" className="text-white bg-gray-700 hover:bg-gray-800 rounded-lg text-sm w-8 h-8 flex items-center justify-center">
                                <FaXmark />
                            </button>
                        </div>
                        <FormAdmin
                            deleletImage={deleteSelectedImage}
                            image={formDataInput.image}
                            product={product}
                            formFields={formFields}
                            onSubmit={handleSubmit}
                            formTitle="Product Information"
                            submitButtonLabel={<><FaPlus /> Add new products</>}
                            handleFileChange={handleFileChange} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductModal;
