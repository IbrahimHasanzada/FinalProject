import React, { useEffect, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import Modal from '../Modal';
import FormAdmin from '../FormAdmin'; 
import { useAddCategoryMutation } from '../../../Store/EmporiumApi';
import { toast } from 'react-toastify';

const AddCategory = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [addCategory, { isSuccess, isError }] = useAddCategoryMutation();
    const [category, setCategory] = useState('');
    const [slug, setSlug] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category && slug) {
            addCategory({ name: category, slug });
            setCategory('');
            setSlug('');
            setIsModalOpen(false);
        } else {
            toast.error('Fill all the fields!');
        }
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Category added successfully');
        } else if (isError) {
            toast.error('Failed to add category');
        }
    }, [isSuccess, isError]);

    const formFields = [
        {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Type category name",
            value: category,
            onChange: (e) => setCategory(e.target.value),
        },
        {
            label: "Slug",
            name: "slug",
            type: "text",
            placeholder: "Type category slug",
            value: slug,
            onChange: (e) => setSlug(e.target.value),
        }
    ];

    return (
        <div>
            <button onClick={toggleModal} className="flex items-center gap-2 border-2 text-[#5C67F7] hover:text-white bg-transparent border-[#5C67F7] hover:bg-[#5C67F7] font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                <FaPlus /> Add Category
            </button>

            <Modal isOpen={isModalOpen} toggleModal={toggleModal} title="Create New Category">
                <FormAdmin
                    formFields={formFields}
                    onSubmit={handleSubmit}
                    formTitle="Create New Category"
                    submitButtonLabel="Add new category"
                />
            </Modal>
        </div>
    );
};

export default AddCategory;
