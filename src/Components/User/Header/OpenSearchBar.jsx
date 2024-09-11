import { FaXmark } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
const OpenSearchBar = ({ flag, setFlag }) => {

    function handleCloseSearch() { setFlag(false) }
    const categories = ['Qadın', 'Kişi', 'Uşaq', 'Gözəllik', 'Zinət əşyaları', 'Ev', 'Dizaynerlər']
    return (
        <section className={`
            top-14 lg:-top-full lg:left-0 lg:shadow-2xl w-full p-6 bg-white
            flex justify-center items-center flex-col duration-500 z-20 absolute lg:fixed
            ${flag ? 'left-0' : '-left-full'} 
            ${flag ? 'lg:top-0' : 'lg:-top-full'}`
            }>
           
            <div className="w-full hidden lg:flex justify-end ">
                <div className="w-[55%] flex justify-between">
                    <div className="w-[165px] h-[40px]">
                        <img src="/img/emporium-logo.png" alt="emporiumLogo" />
                    </div>
                    <FaXmark className="cursor-pointer text-2xl" onClick={handleCloseSearch} />
                </div>
            </div>
            <div className="max-w-[700px] w-full">
                <div className="flex items-center justify-center gap-4">
                    <form className=" h-11 lg:w-full w-[90%] pl-5 pr-2 flex items-center justify-between border my-5">
                        <input type="text" className="outline-none w-full" placeholder="Axtar..." />
                        <IoIosSearch className="text-2xl cursor-pointer" />
                    </form>
                    <FaXmark className="cursor-pointer text-xl block lg:hidden " onClick={handleCloseSearch} />
                </div>
                <div className="max-w-[700px]">
                <ul className='flex py-2 lg:px-5 w-full overflow-scroll'>
                    <li className="py-1 px-2 ml-[2px] mb-1 cursor-pointer rounded-[3px] hover:bg-[#e4e4e4] whitespace-nowrap">Hamısı</li>
                    {categories.map((item, i) => (
                        <li key={i} className="py-1 px-2 ml-[2px] mb-1 cursor-pointer rounded-[3px] hover:bg-[#e4e4e4] whitespace-nowrap">{item}</li>
                    ))}
                </ul>
                </div>
            </div>
        </section>
    )
}

export default OpenSearchBar
