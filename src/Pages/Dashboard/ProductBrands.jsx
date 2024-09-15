import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDelBrandsMutation, useDelCategoryMutation, useGetAllBrandsQuery, useGetAllCategoryQuery } from "../../Store/EmporiumApi";
import { RxDoubleArrowDown } from "react-icons/rx";
import { useEffect, useState } from "react";
import UpdateCategory from "../../Components/Admin/Category/UpdateCategory";
import { toast, ToastContainer } from "react-toastify";
import Swal from 'sweetalert2';
import BrandsModal from "../../Components/Admin/Brands/BrandsModal";
import TableAdmin from "../../Components/Admin/TableAdmin";
import UpdateBrands from "../../Components/Admin/Brands/UpdateBrands";
const ProductBrands = () => {
    const { data: getAllBrands } = useGetAllBrandsQuery()
    const [delBrands, { isError, isSuccess }] = useDelBrandsMutation()
    const deleteBrandsById = (id) => { delBrands({ id }) }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Category deleted successfully')
        } else if (isError) { toast.error('Failed to delete category') }
    }, [isSuccess, isError]);
    return (
        <div className="p-5 w-full bg-[#1F2937]">
            <ToastContainer />
            <div className="mb-4 text-white">
                <h1 className="text-3xl">All Brands</h1>
            </div>
            <div className="w-full flex justify-between items-center mb-4">
                <form className="w-[30%]">
                    <label htmlFor="default-search" className="text-white mb-2 text-lg font-medium">Search</label>
                    <input type="search" id="default-search" className="block w-full p-3 text-sm text-[#9CA3AF] border border-gray-300 rounded-lg bg-[#374151]" placeholder="Search products..." required />
                </form>
                <BrandsModal />
            </div>
            <div className='w-full flex justify-start items-center text-start bg-[#374151] text-[#9CA3AF]'>
                <h2 className='p-4 w-[20%] font-bold'>ID</h2>
                <h2 className='p-4 w-[20%] font-bold'>Name</h2>
                <h2 className='p-4 w-[20%] font-bold'>Slug Name</h2>
                <h2 className='p-4 w-[20%] font-bold'>Edit</h2>
            </div>
            {getAllBrands?.map((item, i) => (
                <TableAdmin
                    key={i}
                    item={item}
                    actions={deleteBrandsById}
                    update={UpdateBrands}
                />
            ))}
        </div>
    );
};

export default ProductBrands;
