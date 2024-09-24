import { useEffect, useState } from "react";
import { IoIosCheckbox, IoIosArrowDown } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const BrandsAccordion = ({ item }) => {
    const navigate = useNavigate();
    const { title, element, id } = item;
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [brands, setBrands] = useState('')
    const [isOpen, setIsOpen] = useState(true);

    const toggleChecked = (i, item) => {
        if (title === 'Color') {
            if (colors.includes(item)) {
                setColors(colors.filter(color => color !== item));
            } else {
                setColors([...colors, item]);
            }
        } else if (title === 'Size') {
            if (sizes.includes(item)) {
                setSizes(sizes.filter(size => size !== item));
            } else {
                setSizes([...sizes, item]);
            }
        } else if (title === 'Brands') {
            if (id?.[i]) {
                if (brands === id[i]) {
                    setBrands('');
                } else {
                    setBrands(id[i]);
                }
            }

        }

    }

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (colors.length > 0) {
            searchParams.set('color', colors.join(','));
        } else {
            searchParams.delete('color');
        }
        navigate({ pathname: '/products/all', search: `?${searchParams.toString()}` });
    }, [colors]);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (sizes.length > 0) {
            searchParams.set('size', sizes.join(','));
        } else {
            searchParams.delete('size');
        }
        navigate({ pathname: '/products/all', search: `?${searchParams.toString()}` });
    }, [sizes]);

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (brands) {
            searchParams.set('brandId', brands);
        } else {
            searchParams.delete('brandId');
        }
        navigate({ pathname: '/products/all', search: `?${searchParams.toString()}` });
    }, [brands]);





    return (
        <section className="border-y flex flex-col">
            <h2 onClick={() => setIsOpen(!isOpen)} className="py-4 flex justify-between items-center text-sm font-bold cursor-pointer">
                <span>{title}</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </h2>
            <ul className={`w-full overflow-y-scroll transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[288px]' : 'max-h-0'}`}>
                {element?.map((item, i) => (
                    <li key={i} onClick={() => toggleChecked(i, item)} className={` py-2 flex items-center gap-2 cursor-pointer ${colors.includes(item) && title === 'Color' ? 'bg-black text-white rounded-lg px-2' : 'bg-white text-black'}`}>
                        {title === 'Color' ? (
                            <div style={{ background: item }} className={`rounded-full h-5 w-5 ${item === 'WHITE' ? 'border border-black' : ''}`}></div>
                        ) : (
                            title === 'Brands' && brands === id?.[i] || title === 'Size' && sizes.includes(item) ? (
                                <IoIosCheckbox className="text-lg" />
                            ) : (
                                <RiCheckboxBlankLine className="text-lg" />
                            )
                        )}
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            
        </section>
    );
};

export default BrandsAccordion;
