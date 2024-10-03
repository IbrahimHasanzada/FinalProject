import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import Modal from '../Modal';
import FormAdmin from '../FormAdmin';
import { useUpdateCategoryMutation, useGetCategoryByIdQuery } from '../../../Store/EmporiumApi';
import { toast } from 'react-toastify';

const UpdateCategoryModal = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const { data: getData } = useGetCategoryByIdQuery(id);
    const [updateCategory, { isError, isSuccess }] = useUpdateCategoryMutation();
    const [updateCategoryName, setUpdateCategoryName] = useState('');
    const [slug, setSlug] = useState('');

    useEffect(() => {
        if (getData) {
            setUpdateCategoryName(getData.name);
            setSlug(getData.slug);
        }
    }, [getData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!updateCategoryName || !slug) {
            toast.error('Fill all the fields!');
            return
        }
        updateCategory({ categoryId: id, slug: slug, name: updateCategoryName });
        setUpdateCategoryName('');
        setSlug('');
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Category updated successfully');
        } else if (isError) {
            toast.error('Failed to update category');
        }
    }, [isSuccess, isError]);

    const formFields = [
        {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Type category name",
            value: updateCategoryName,
            onChange: (e) => setUpdateCategoryName(e.target.value),
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
                <FaRegEdit /> Edit
            </button>
            <Modal isOpen={isModalOpen} toggleModal={toggleModal} title="Update Category">
                <FormAdmin
                    formFields={formFields}
                    onSubmit={handleSubmit}
                    formTitle="Update Category"
                    submitButtonLabel="Update Category"
                />
            </Modal>
        </div>
    );
};

export default UpdateCategoryModal;
