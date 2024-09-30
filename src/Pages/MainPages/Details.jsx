import Card from "../../Components/Card"
import { useGetAllProductQuery, useGetProductByIdQuery } from "../../Store/EmporiumApi"
import ProductInformation from "../../Components/User/ProductInformation"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const Details = () => {
    const [manageId, setManageId] = useState('')
    const { data: getAllProduct, isLoading } = useGetAllProductQuery()
    const { data: productData, } = useGetProductByIdQuery(manageId, { skip: !manageId })
    console.log();
    
    const { productsId } = useParams()
    useEffect(() => {
        productsId && setManageId(productsId)
    }, [productsId])
    return (
        <div className='wrapper mx-auto font-["Montserrat",_sans-serif]'>
            <ProductInformation />
            <section className="w-full my-6 md:my-10">
                <h2 className='text-2xl font-["Cormorant_Garamond",_serif] font-medium'>You might also like</h2>
                <section className="w-full my-6 grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-10">
                    {getAllProduct?.data.map((item, i) => (
                        item.id != manageId && item.subcategory.name == productData?.subcategory.name && <Card key={i} item={item} />
                    ))}
                </section>
            </section>
        </div>
    )
}

export default Details
