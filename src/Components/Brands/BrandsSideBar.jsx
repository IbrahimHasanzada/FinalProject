import { FaXmark } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const BrandsSideBar = ({ filter, setFilter }) => {
    return (
        <div className={`relative mr-8 px-6 py-16 lg:py-0 lg:pl-0 lg:pr-3 border-t w-full h-[772px] overflow-y-auto`}>
            <section className="absolute top-4 right-4 lg:hidden flex w-full justify-end">
                <button onClick={() => setFilter(false)}>
                    <FaXmark className="text-2xl" />
                </button>
            </section>
            <section className=" border-y flex flex-col max-h-[288px]">
                <h2 className="py-4 flex justify-between items-center text-sm font-bold">
                    <span>Kateqoriyalar</span>
                    <IoIosArrowUp />
                </h2>
                <ul className="w-full overflow-y-scroll">
                    <li className="py-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <label htmlFor="checkbox-1" className="ms-2 text-xs font-medium ">Yastidaban ayaqqabilar</label>
                    </li>
                </ul>
            </section>
            <section className="border-y flex flex-col max-h-[288px]">
                <section className="py-4">
                    <h2 className="flex justify-between items-center text-sm font-bold">
                        <span>Rengler</span>
                        <IoIosArrowUp />
                    </h2>
                </section>
                <ul className="w-full overflow-y-scroll">
                    <li className="py-2 flex items-center">
                        <div className=" rounded-full h-5 w-5 bg-blue-500"></div>
                        <span className="pl-2 text-xs">Aciq mavi</span>
                    </li>
                </ul>
            </section>
            <section className="border-y flex flex-col max-h-[288px]">
                <h2 className="py-4 flex justify-between items-center text-sm font-bold">
                    <span>Brendler</span>
                    <IoIosArrowUp />
                </h2>
                <ul className="w-full overflow-y-scroll">
                    <li className="py-2">
                        <input type="checkbox" className="w-4 h-4 " />
                        <label htmlFor="checkbox-1" className="ms-2 text-xs font-medium ">A.testoni</label>
                    </li>
                </ul>
            </section>
            <section className="border-y flex flex-col max-h-[288px]">
                <h2 className="py-4 flex justify-between items-center text-sm font-bold">
                    <span>Endirim</span>
                    <IoIosArrowUp />
                </h2>
                <ul className="w-full overflow-y-scroll">
                    <li className="py-2">
                        <input type="checkbox" className="w-4 h-4 " />
                        <label htmlFor="checkbox-1" className="ms-2 text-xs font-medium ">Endirimsiz</label>
                    </li>
                </ul>
            </section>
            <section className="border-y flex flex-col max-h-[288px]">
                <h2 className="py-4 flex justify-between items-center text-sm font-bold">
                    <span>Olculer</span>
                    <IoIosArrowUp />
                </h2>
                <ul className="w-full overflow-y-scroll">
                    <li className="py-2">
                        <input type="checkbox" className="w-4 h-4 " />
                        <label htmlFor="checkbox-1" className="ms-2 text-xs font-medium ">EU 11</label>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default BrandsSideBar
