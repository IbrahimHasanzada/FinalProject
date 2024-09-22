import { useState } from "react";
import { IoIosCheckbox, IoIosArrowDown } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BrandsAccordion = ({ item }) => {
    const navigate = useNavigate();
    const { title, element, end, id } = item;
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const [isOpen, setIsOpen] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]);
    const toggleChecked = (index) => {
        if (checkedItems.includes(index)) {
            setCheckedItems(checkedItems.filter((item) => item !== index));
        } else {
            setCheckedItems([...checkedItems, index]);
        }
        let newColors = [...colors];
        let newSizes = [...sizes];
        if (end === 'color' && !colors.includes(item.element[index])) {
            newColors = [...newColors, item.element[index]];
            setColors(newColors);
        }
        if (end === 'size' && sizes.includes(item.element[index])) {
            newSizes = newSizes.filter((size) => size !== item.element[index]);
        }else{
            newSizes = [...newSizes, item.element[index]];
            setSizes(newSizes);
        }
        const searchParams = new URLSearchParams(window.location.search);
        if (newColors.length > 0) {
            searchParams.set('color', newColors.join(','));
        } else {
            searchParams.delete('color')
        }
        if (newSizes.length > 0) {
            searchParams.set('size', newSizes.join(','));
        } else {
            searchParams.delete('size')
        }
        navigate({ pathname: '/products/all', search: `?${searchParams.toString()}` });
    };
    
    return (
        <section className="border-y flex flex-col">
            <h2 onClick={() => setIsOpen(!isOpen)} className="py-4 flex justify-between items-center text-sm font-bold cursor-pointer">
                <span>{title}</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </h2>
            <ul className={`w-full overflow-y-scroll transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[288px]' : 'max-h-0'}`}>
                {element?.map((item, i) => (
                    <li key={i} onClick={() => toggleChecked(i, item)} className="py-2 flex items-center gap-2 cursor-pointer">
                        {title === 'Color' ? (
                            <div style={{ background: item }} className={`rounded-full h-5 w-5 ${item === 'WHITE' ? 'border border-black' : ''}`}></div>
                        ) : (
                            checkedItems.includes(i) ? (
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
