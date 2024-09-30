import AddCategory from "../../Components/Admin/Category/AddCategory";
import { useDelCategoryMutation, useGetAllCategoryQuery } from "../../Store/EmporiumApi";
import { useEffect, useState } from "react";
import UpdateCategory from "../../Components/Admin/Category/UpdateCategory";
import ShowSubCategories from "../../Components/Admin/Category/ShowSubCategories";
import { toast} from "react-toastify";
import TableAdmin from "../../Components/Admin/TableAdmin";
import Loading from "../../Components/Loading";
const ProductCategory = () => {
    const [openSub, setOpenSub] = useState(false)
    const { data: getAllCategory, isLoading } = useGetAllCategoryQuery()
    const [delCategory, { isError, isSuccess }] = useDelCategoryMutation()
    const deleteCategoryByID = (id) => { delCategory({ id }) }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Category deleted successfully')
        } else if (isError) { toast.error('Failed to delete category') }
    }, [isSuccess, isError])
    return (
        <div className="p-5 w-full bg-[#1F2937]">
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
            {isLoading ?
                <Loading />
                :
                <>
                    <div className='w-full flex justify-start items-center text-start bg-[#374151] text-[#9CA3AF]'>
                        <h2 className='p-4 w-[20%] font-bold'>ID</h2>
                        <h2 className='p-4 w-[20%] font-bold'>Name</h2>
                        <h2 className='p-4 w-[20%] font-bold'>Slug Name</h2>
                        <h2 className='p-4 w-[20%] font-bold'>Edit</h2>
                    </div>
                    {getAllCategory?.map((item, i) => (
                        <TableAdmin
                            key={i}
                            item={item}
                            actions={deleteCategoryByID}
                            update={UpdateCategory}
                            ShowSubCategories={ShowSubCategories}
                        />
                    ))}
                </>
            }
        </div>
    );
};

export default ProductCategory;
