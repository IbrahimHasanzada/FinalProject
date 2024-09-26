import React, { useEffect, useState } from 'react'
import ProductModal from '../../Components/Admin/Product/ProductModal'
import { FaRegEdit } from "react-icons/fa";
import { useDelProductMutation, useGetAllProductQuery } from '../../Store/EmporiumApi';
import TableAdmin from '../../Components/Admin/TableAdmin';
import UpdateProduct from '../../Components/Admin/Product/UpdateProduct';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../../Components/Loading';
const Products = () => {
    const { data: getProducts, isLoading } = useGetAllProductQuery()
    const [delProduct, { data: getDeletedProducts, isError, isSuccess }] = useDelProductMutation()
    const [product, setProduct] = useState(true)
    const deleteProduct = (id) => { delProduct({ id }) }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Product deleted successfully')
        } else if (isError) { toast.error('Failed to delete Product') }
    }, [isSuccess, isError])
    return (
        <div className="p-5 w-full bg-[#1F2937]">
            <ToastContainer />
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
            {isLoading ?
                <Loading />
                :
                <>
                    <div className='w-full'>
                        <div className='w-full flex justify-start items-center text-start bg-[#374151] text-[#9CA3AF]'>
                            <h2 className='p-4 w-[10%]'>Product ID</h2>
                            <h2 className='p-4 w-[22%]'>Product</h2>
                            <h2 className='p-4 w-[16%]'>Category</h2>
                            <h2 className='p-4 w-[16%]'>Subcategory</h2>
                            <h2 className='p-4 w-[16%]'>Price</h2>
                            <h2 className='p-4 w-[33%]'>Edit</h2>
                        </div>
                        {getProducts?.data.map((item, i) => (
                            <TableAdmin
                                key={i}
                                item={item}
                                product={product}
                                actions={deleteProduct}
                                update={UpdateProduct}
                            />
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default Products
