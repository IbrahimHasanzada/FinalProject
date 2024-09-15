import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Modal from '../Modal';
import FormAdmin from '../FormAdmin';
import { useAddSubCategoryMutation, useGetAllCategoryQuery } from '../../../Store/EmporiumApi';
import { toast } from 'react-toastify';
import TableAdmin from '../TableAdmin';
const SubcategoryModal = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const toggleModal = () => setIsModalOpen(!isModalOpen)
    const [addSubCategory, { data: getSubData, isSuccess, isError }] = useAddSubCategoryMutation();
    const { data: getData } = useGetAllCategoryQuery()
    const [subcategory, setSubCategory] = useState('')
    const [Id, setId] = useState('')
    const [slug, setSlug] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (subcategory && slug) {
            addSubCategory({ name: subcategory, slug: slug, categoryId: id })
            setSubCategory('')
            setId('')
            setSlug('')
            setIsModalOpen(false);
            console.log(id, slug, subcategory);

        } else { toast.error('Fill all the fields!') }
    }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Subcategory added successfully')
        } else if (isError) {
            toast.error('Failed to add subcategory')
        }
    }, [isSuccess, isError]);
    const formFields = [
        {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Type subcategory name",
            value: subcategory,
            onChange: (e) => setSubCategory(e.target.value),
        },
        {
            label: "Slug",
            name: "slug",
            type: "text",
            placeholder: "Type subcategory slug",
            value: slug,
            onChange: (e) => setSlug(e.target.value),
        },
        {
            label: "Category ID",
            name: "categoryId",
            type: "text",
            placeholder: "Type category ID",
            value: id,
            onChange: (e) => setId(e.target.value),
        },
    ];

    return (
        <div>
            <button onClick={toggleModal} className="flex items-center gap-2  border-2 text-[#5C67F7] hover:text-white bg-transparent border-[#5C67F7] hover:bg-[#5C67F7] font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                <FaPlus />  Add Sub Category
            </button>


            <Modal isOpen={isModalOpen} toggleModal={toggleModal} title="Create New Subcategory">
                <FormAdmin
                    formFields={formFields}
                    onSubmit={handleSubmit}
                    formTitle="Create New Subcategory"
                    submitButtonLabel="Add new subcategory"
                />
            </Modal>
        </div>
    );
};

export default SubcategoryModal;
