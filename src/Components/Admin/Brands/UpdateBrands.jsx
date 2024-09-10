import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import Modal from '../Modal';
import FormAdmin from '../FormAdmin';
import { useGetBrandsByIdQuery, useUpdateBrandsMutation } from '../../../Store/EmporiumApi';
import { toast } from 'react-toastify';

const UpdateBrands = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const { data: getData } = useGetBrandsByIdQuery(id);
    const [updateBrand, { isError, isSuccess }] = useUpdateBrandsMutation();
    const [updateBrandName, setUpdateBrandName] = useState('');
    const [slug, setSlug] = useState('');

    useEffect(() => {
        if (getData) {
            setUpdateBrandName(getData.name);
            setSlug(getData.slug);
        }
    }, [getData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!updateBrandName || !slug) {
            toast.error('Fill all the fields!');
            return
        }
        updateBrand({ Id: id, slug: slug, name: updateBrandName });
        setUpdateBrandName('');
        setSlug('');
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success('Brand updated successfully');
        } else if (isError) {
            toast.error('Failed to update brand');
        }
    }, [isSuccess, isError]);

    const formFields = [
        {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Type brand name",
            value: updateBrandName,
            onChange: (e) => setUpdateBrandName(e.target.value),
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
            <button onClick={toggleModal} className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                <FaRegEdit /> Edit
            </button>
            <Modal isOpen={isModalOpen} toggleModal={toggleModal} title="Update Category">
                <FormAdmin
                    formFields={formFields}
                    onSubmit={handleSubmit}
                    formTitle="Update Brands"
                    submitButtonLabel="Update Brands"
                />
            </Modal>
        </div>
    );
};

export default UpdateBrands;
