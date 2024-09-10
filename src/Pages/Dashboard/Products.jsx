import React from 'react'
import ProductModal from '../../Components/Admin/Product/ProductModal'
import { FaRegEdit } from "react-icons/fa";
const Products = () => {
    return (
        <div className="p-5 w-full bg-[#1F2937]">
            <div className="mb-4 text-white font-medium">
                <h1 className="text-3xl">All products</h1>
            </div>
            <div className="w-full flex justify-between items-center mb-4">
                <form className="w-[30%]">
                    <label htmlFor="default-search" className="text-white mb-2 text-lg font-medium">Search</label>
                    <input type="search" id="default-search" className="block w-full p-3  text-sm text-[#9CA3AF] border border-gray-300 rounded-lg bg-[#374151]" placeholder="Search prodcuts..." required />
                </form>
                <ProductModal />
            </div>
            <div className='w-full'>
                <div className='w-full flex justify-start items-center text-start bg-[#374151] text-[#9CA3AF]'>
                    <h2 className='p-4 w-[20%]'>Product Name</h2>
                    <h2 className='p-4 w-[20%]'>Technology</h2>
                    <h2 className='p-4 w-[20%]'>ID</h2>
                    <h2 className='p-4 w-[20%]'>Price</h2>
                    <h2 className='p-4 w-[20%]'>Edit</h2>
                </div>
                <div className='w-full flex justify-center items-center bg-[#374151] text-[#9CA3AF]'>
                    <span className='p-4 w-[20%]'>Education Dashboard</span>
                    <span className='p-4 w-[20%]'>Angular</span>
                    <span className='p-4 w-[20%]'>#194556</span>
                    <span className='p-4 w-[20%]'>$149</span>
                    <div className='p-4 w-[20%] flex gap-2'>
                        <button className="flex items-center gap-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                            <FaRegEdit />   Edit 
                        </button>
                        <button className="flex items-center gap-2 text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                            <FaRegEdit />   Delete 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
