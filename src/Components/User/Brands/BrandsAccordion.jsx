import { useEffect, useState } from "react";
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

    const toggleChecked = (index, name) => {
        console.log(name);
        
        // Checked items state update
        if (checkedItems.includes(name)) {
            setCheckedItems((prev) => prev.filter((item) => item !== name));
        } else {
            setCheckedItems((prev) => [...prev, name]);
        }
    
        // Separate logic for colors and sizes
        setColors((prevColors) => {
            let newColors = [...prevColors];
            if (end === 'color') {
                if (!newColors.includes(item.element[index])) {
                    newColors = [...newColors, item.element[index]];
                } else {
                    newColors = newColors.filter((color) => color !== item.element[index]);
                }
            }
            return newColors;
        });
    
        setSizes((prevSizes) => {
            let newSizes = [...prevSizes];
            if (end === 'size') {
                if (!newSizes.includes(item.element[index])) {
                    newSizes = [...newSizes, item.element[index]];
                } else {
                    newSizes = newSizes.filter((size) => size !== item.element[index]);
                }
            }
            return newSizes;
        });
    };
    
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        if (colors.length > 0) {
            searchParams.set('color', colors.join(','));
        }
        if (sizes.length > 0) {
            searchParams.set('size', sizes.join(','));
        }
        console.log(colors);
        navigate({ pathname: '/products/all', search: `?${searchParams.toString()}` });
    }, [colors, sizes]); 
    



    return (
        <section className="border-y flex flex-col">
            <h2 onClick={() => setIsOpen(!isOpen)} className="py-4 flex justify-between items-center text-sm font-bold cursor-pointer">
                <span>{title}</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </h2>
            <ul className={`w-full overflow-y-scroll transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[288px]' : 'max-h-0'}`}>
                {element?.map((item, i) => (
                    <li key={i} onClick={() => toggleChecked(i, item)} className={` py-2 flex items-center gap-2 cursor-pointer ${checkedItems.includes(item) && title === 'Color' ? 'bg-black text-white rounded-lg px-2' : 'bg-white text-black' }`}>
                        {title === 'Color' ? (
                            <div style={{ background: item }} className={`rounded-full h-5 w-5 ${item === 'WHITE' ? 'border border-black' : ''}`}></div>
                        ) : (
                            checkedItems.includes(item) ? (
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
