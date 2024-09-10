import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import AddCategory from "../../Components/Admin/Category/AddCategory";
import { useDelCategoryMutation, useGetAllCategoryQuery } from "../../Store/EmporiumApi";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useEffect, useState } from "react";
import SubcategoryModal from "../../Components/Admin/Category/SubCategoryModal";
import UpdateCategory from "../../Components/Admin/Category/UpdateCategory";
import { toast, ToastContainer } from "react-toastify";
import Swal from 'sweetalert2';
import TableAdmin from "../../Components/Admin/TableAdmin";
const ProductCategory = () => {
    const [openSub, setOpenSub] = useState(false)
    const { data: getAllCategory } = useGetAllCategoryQuery()
    const [delCategory, { isError, isSuccess }] = useDelCategoryMutation()
    const deleteCategoryByID = (id) => { delCategory({ id }) }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Category deleted successfully')
        } else if (isError) { toast.error('Failed to delete category') }
    }, [isSuccess, isError])
    return (
        <div className="p-5 w-full bg-[#1F2937]">
            <ToastContainer />
            <div className="mb-4 text-white">
                <h1 className="text-3xl">All Categories</h1>
            </div>
            <div className="w-full flex justify-between items-center mb-4">
                <form className="w-[30%]">
                    <label htmlFor="default-search" className="text-white mb-2 text-lg font-medium">Search</label>
                    <input type="search" id="default-search" className="block w-full p-3 text-sm text-[#9CA3AF] border border-gray-300 rounded-lg bg-[#374151]" placeholder="Search products..." required />
                </form>
                <AddCategory />
            </div>
            <div className='w-full flex justify-start items-center text-start bg-[#374151] text-[#9CA3AF]'>
                <h2 className='p-4 w-[20%] font-bold'>Name</h2>
                <h2 className='p-4 w-[20%] font-bold'>Slug Name</h2>
                <h2 className='p-4 w-[20%] font-bold'>ID</h2>
                <h2 className='p-4 w-[20%] font-bold'>Edit</h2>
            </div>
            {getAllCategory?.map((item, i) => (
                <TableAdmin
                    key={i}
                    item={item}
                    actions={deleteCategoryByID}
                    update={UpdateCategory}
                    SubCategory={SubcategoryModal}

                />
                // <div key={i} className="w-full">
                //     <div className='flex justify-start items-center bg-[#374151] text-[#9CA3AF]'>
                //         <span className='p-4 w-[20%]'>{item.name}</span>
                //         <span className='p-4 w-[20%]'>{item.slug}</span>
                //         <span className='p-4 w-[20%]'>{item.id}</span>
                //         <div className='p-4 w-[33%] flex gap-2'>
                //             <UpdateCategory id={item.id} />
                //             <button onClick={() => deleteCategoryByID(item.id)} className="flex items-center gap-2 text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                //                 <FaRegTrashAlt />   Delete
                //             </button>
                //             
                //         </div>
                //         <button onClick={() => setOpenSub(!openSub)} className="w-[5%] flex justify-center items-center h-full border p-3"> <RxDoubleArrowDown /></button>
                //     </div>
                //     <div className={`flex justify-start items-center bg-transparent text-[#9CA3AF] duration-300 ${openSub ? 'block' : 'hidden'}`}>
                //         <span className='p-4 w-[20%]'>{item.name}</span>
                //         <span className='p-4 w-[20%]'>{item.slug}</span>
                //         <span className='p-4 w-[20%]'>{item.id}</span>
                //         <div className='p-4 w-[20%] flex gap-2 '>
                //             <button className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                //                 <FaRegEdit />   Edit
                //             </button>
                //             <button className="flex items-center gap-2 text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                //                 <FaRegEdit />   Delete
                //             </button>
                //         </div>
                //     </div>
                // </div>
            ))}
        </div>
    );
};

export default ProductCategory;
