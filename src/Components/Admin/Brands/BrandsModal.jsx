import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Modal from '../Modal';
import FormAdmin from '../FormAdmin';
import { useAddBrandsMutation } from '../../../Store/EmporiumApi';
import { toast } from 'react-toastify';

const BrandsModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [addBrands, { isSuccess, isError }] = useAddBrandsMutation();
    const [brands, setBrands] = useState('');
    const [slug, setSlug] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (brands && slug) {
            addBrands({ name: brands, slug });
            setBrands('');
            setSlug('');
            setIsModalOpen(false);
        } else {
            toast.error('Fill all the fields!');
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Brand added successfully');
        } else if (isError) {
            toast.error('Failed to add brand');
        }
    }, [isSuccess, isError]);

    const formFields = [
        {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Type brand name",
            value: brands,
            onChange: (e) => setBrands(e.target.value),
        },
        {
            label: "Slug",
            name: "slug",
            type: "text",
            placeholder: "Type brand slug",
            value: slug,
            onChange: (e) => setSlug(e.target.value),
        }
    ];

    return (
        <div>
            <button onClick={toggleModal} className="flex items-center gap-2 border-2 text-[#5C67F7] hover:text-white bg-transparent border-[#5C67F7] hover:bg-[#5C67F7] font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                <FaPlus /> Add Brand
            </button>

            <Modal isOpen={isModalOpen} toggleModal={toggleModal} title="Create New Brand">
                <FormAdmin
                    formFields={formFields}
                    onSubmit={handleSubmit}
                    formTitle="Create New Brand"
                    submitButtonLabel="Add new brand"
                />
            </Modal>
        </div>
    );
};

export default BrandsModal;
