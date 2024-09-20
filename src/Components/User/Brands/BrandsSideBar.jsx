import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import BrandsAccordion from "./BrandsAccordion";
import { useGetAllBrandsQuery } from "../../../Store/EmporiumApi";
import { eColors, eSize } from "../../../Store/enum";
const BrandsSideBar = ({ filter, setFilter }) => {
    const {data: getAllBrands} = useGetAllBrandsQuery()
    const getBrands = getAllBrands?.map(item => item.name)
    const brandId = getAllBrands?.map(item => item.id)
    
    const filterProducts = [
        {
            title: 'Color',
            element: eColors,
            end: 'color'
        },
        {
            title: 'Brands',
            element: getBrands,
            end: 'brandId',
            id: brandId
        },
        {
            title: 'Discount',
            element: ['Discount', 'without discount'],
            end: 'discount'
        },
        {
            title: 'Size',
            element: eSize,
            end: 'size'
        },
    ]
    return (
        <div className={`relative mr-8 px-6 py-16 lg:py-0 lg:pl-0 lg:pr-3 border-t w-full h-[772px] overflow-y-auto`}>
            <section className="absolute top-4 right-4 lg:hidden flex w-full justify-end">
                <button onClick={() => setFilter(false)}>
                    <FaXmark className="text-2xl" />
                </button>
            </section>
            <section>
                {filterProducts.map((item, i) => (
                    <BrandsAccordion key={i} item={item} i={i} />
                ))}
            </section>
        </div>
    )
}

export default BrandsSideBar
