import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import BrandsAccordion from "./BrandsAccordion";
import { useGetAllBrandsQuery } from "../../../Store/EmporiumApi";
import { eColors, eSize } from "../../../Store/enum";
import RangeSlider from "../../RangeSlider";
const BrandsSideBar = ({ filter, setFilter }) => {
    const { data: getAllBrands } = useGetAllBrandsQuery()
    const getBrands = getAllBrands?.map(item => item.name)
    const brandId = getAllBrands?.map(item => item.id)

    const filterProducts = [
        {
            title: 'Color',
            element: eColors,
        },
        {
            title: 'Brands',
            element: getBrands,
            id: brandId
        },
        {
            title: 'Discount',
            element: ['Discounted'],
        },
        {
            title: 'Size',
            element: eSize,
        },
    ]
    return (
        <div className={`relative mr-8 px-6 py-16 lg:py-0 lg:pl-0 lg:pr-3 border-t w-full h-full lg:h-[772px] overflow-y-auto`}>
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
            <section>
                <h2 className="py-4 text-md font-bold ">
                    Price
                </h2>
                <RangeSlider />
            </section>
        </div>
    )
}

export default BrandsSideBar
