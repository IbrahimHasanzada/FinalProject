import { useDelBrandsMutation, useGetAllBrandsQuery, } from "../../Store/EmporiumApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import BrandsModal from "../../Components/Admin/Brands/BrandsModal";
import TableAdmin from "../../Components/Admin/TableAdmin";
import UpdateBrands from "../../Components/Admin/Brands/UpdateBrands";
import Loading from "../../Components/Loading";
const ProductBrands = () => {
    const { data: getAllBrands, isLoading } = useGetAllBrandsQuery()
    const [delBrands, { isError, isSuccess }] = useDelBrandsMutation()
    const deleteBrandsById = (id) => { delBrands({ id }) }
    useEffect(() => {
        if (isSuccess) {
            toast.success('Category deleted successfully')
        } else if (isError) { toast.error('Failed to delete category') }
    }, [isSuccess, isError]);
    return (
        <div className="p-5 w-full bg-[#1F2937]">
            <div className="mb-4 text-white">
                <h1 className="text-3xl">All Brands</h1>
            </div>
            <div className="w-full flex justify-end items-center mb-4">
                <BrandsModal />
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
                    {getAllBrands?.map((item, i) => (
                        <TableAdmin
                            key={i}
                            item={item}
                            actions={deleteBrandsById}
                            update={UpdateBrands}
                        />
                    ))}
                </>
            }
        </div>
    );
};

export default ProductBrands;
