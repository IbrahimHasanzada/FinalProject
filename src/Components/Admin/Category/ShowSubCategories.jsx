import {  useGetAllCategoryQuery, useGetCategoryByIdQuery } from "../../../Store/EmporiumApi";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDelSubCategoryMutation } from "../../../Store/EmporiumApi";
import TableAdmin from "../TableAdmin";
import Modal from "../Modal";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import SubcategoryModal from "./SubCategoryModal";
import UpdateSubCategories from "./UpdateSubCategory";
const ShowSubCategories = ({id}) => {
    console.log(id);
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [subcategories, setSubcategories] = useState(true)
    const toggleModal = () => setIsModalOpen(!isModalOpen)
    const { data: getData } = useGetCategoryByIdQuery(id);
    const [delSubCategory, { isError, isSuccess }] = useDelSubCategoryMutation()
    const deleteSubCategoryByID = (id) => { delSubCategory({ id }) }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Category deleted successfully')
        } else if (isError) { toast.error('Failed to delete category') }
    }, [isSuccess, isError])
    return (
        <div>
            <button onClick={toggleModal} className="flex items-center gap-2 border-2 text-yellow-400 hover:text-white bg-transparent border-yellow-400 hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                <FaPlus /> Subcategories
            </button>
            <Modal subcategories={subcategories} isOpen={isModalOpen} toggleModal={toggleModal} title='Subcategories'>
                <div className="my-5 float-end">
                    <SubcategoryModal id={id} />
                </div>
                <div className="w-full bg-[#1F2937]">
                    <div className='w-full flex justify-start items-center text-start bg-[#374151] text-[#9CA3AF]'>
                        <h2 className='p-4 w-[20%] font-bold'>Name</h2>
                        <h2 className='p-4 w-[20%] font-bold'>Slug Name</h2>
                        <h2 className='p-4 w-[20%] font-bold'>ID</h2>
                        <h2 className='p-4 w-[20%] font-bold'>Edit</h2>
                    </div>
                    {getData?.Subcategory.map((item, i) => (
                            <div key={i} className='flex justify-start items-center bg-[#1F2937] text-[#9CA3AF]'>
                                <span className='p-4 w-[20%]'>{item.name}</span>
                                <span className='p-4 w-[20%]'>{item.slug}</span>
                                <span className='p-4 w-[20%]'>{item.id}</span>
                                <div className='p-4 w-[33%] flex gap-2'>
                                    {/* <UpdateComponent id={item.id} /> */}
                                    <button onClick={() => deleteSubCategoryByID(item.id)} className="flex items-center gap-2 text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                                        <FaRegTrashAlt /> Delete
                                    </button>
                                    <UpdateSubCategories catId={id} id={item.id} subName={item.name} subSlug={item.slug} />
                                </div>
                                {/* <button onClick={() => setOpenSub(!openSub)} className="w-[5%] flex justify-center items-center h-full border p-3"><RxDoubleArrowDown /></button> */}
                            </div>
                        ))}
                </div>
            </Modal>
        </div>

    );
};

export default ShowSubCategories;
