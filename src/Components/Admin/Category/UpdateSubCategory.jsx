import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import Modal from '../Modal';
import FormAdmin from '../FormAdmin';
import { useUpdateSubCategoryMutation } from '../../../Store/EmporiumApi';
import { toast } from 'react-toastify';

const UpdateSubCategories = ({ catId, id, subName, subSlug }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const [updateSubCategory, { isError, isSuccess }] = useUpdateSubCategoryMutation();
    const [updateSubCategoryName, setUpdateSubCategoryName] = useState('');
    const [slug, setSlug] = useState('');
    useEffect(() => {
        if (id) {
          setUpdateSubCategoryName(subName);
            setSlug(subSlug);
        }
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!updateSubCategoryName || !slug) {
            toast.error('Fill all the fields!');
            return
        }
        updateSubCategory({ name: updateSubCategoryName, slug: slug, Id: id, categoryId:catId });
        setUpdateSubCategoryName('');
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
            placeholder: "Type subcategory name",
            value: updateSubCategoryName,
            onChange: (e) => setUpdateSubCategoryName(e.target.value),
        },
        {
            label: "Slug",
            name: "slug",
            type: "text",
            placeholder: "Type subcategory slug",
            value: slug,
            onChange: (e) => setSlug(e.target.value),
        }
    ];

    return (
        <div>
            <button onClick={toggleModal} className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                <FaRegEdit /> Edit
            </button>
            <Modal isOpen={isModalOpen} toggleModal={toggleModal} title="Update Subcategory">
                <FormAdmin
                    formFields={formFields}
                    onSubmit={handleSubmit}
                    formTitle="Update Subcategory"
                    submitButtonLabel="Update Subcategory"
                />
            </Modal>
        </div>
    );
};

export default UpdateSubCategories;
