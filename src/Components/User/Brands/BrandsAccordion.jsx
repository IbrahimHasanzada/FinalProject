import { useState } from "react";
import { IoIosCheckbox, IoIosArrowDown } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";

const BrandsAccordion = ({ item }) => {
    const { title, element } = item;
    const [isOpen, setIsOpen] = useState(true);
    const [checked, setChecked] = useState(false)
    return (
        <section className="border-y flex flex-col">
            <h2 onClick={() => setIsOpen(!isOpen)} className="py-4 flex justify-between items-center text-sm font-bold cursor-pointer">
                <span>{title}</span>
                <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </h2>
            <ul className={`w-full overflow-y-scroll transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-[288px]' : 'max-h-0'}`}>
                {element.map((item, i) => (
                    <li key={i} onClick={() => setChecked(!checked)} className="py-2 flex items-center gap-2 cursor-pointer">
                        {title === 'Color' ? (
                            <div style={{ background: item }} className={`rounded-full h-5 w-5 ${item === 'white' ? 'border border-black' : ''}`}></div>
                        ) : (
                            checked ? (<IoIosCheckbox className="text-lg" />) : (<RiCheckboxBlankLine className="text-lg" />)
                        )}
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BrandsAccordion;
