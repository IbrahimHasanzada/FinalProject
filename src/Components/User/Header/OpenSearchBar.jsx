import { FaXmark } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { useGetAllCategoryQuery, useSearchProductsQuery } from "../../../Store/EmporiumApi";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const OpenSearchBar = ({ flag, setFlag }) => {

    function handleCloseSearch() { setFlag(false) }
    const { data: categories } = useGetAllCategoryQuery()
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    const [catName, setCatName] = useState('')
    const { data: getSearchedData } = useSearchProductsQuery(search, { skip: !search })
    useEffect(() => {
        if (search === '') {
            setSearchData([])
        } else {
            setSearchData(getSearchedData)
        }
    }, [search])
    console.log(searchData)

    return (
        <section className={`
            h-[100vh] lg:h-auto 
            top-14 lg:-top-full lg:left-0 lg:shadow-2xl w-full p-6 bg-white
            flex justify-start items-center flex-col  duration-300 lm:duration-0 lg:duration-300 z-20 absolute lg:fixed
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
                <div className="flex flex-col">
                    <div className="flex items-center justify-center gap-4">
                        <form className=" h-11 lg:w-full w-[90%] pl-5 pr-2 flex items-center justify-between border my-5">
                            <input onChange={(e) => setSearch(e.target.value)} type="text" className="outline-none w-full" placeholder="Axtar..." />
                            <IoIosSearch className="text-2xl cursor-pointer" />
                        </form>
                        <FaXmark className="cursor-pointer text-xl block lg:hidden " onClick={handleCloseSearch} />
                    </div>
                    <div className="max-w-[700px]">
                        <ul className='flex py-2 lg:px-5 w-full overflow-scroll'>
                            <li onClick={() => setCatName('')} className={`py-1 px-2 ml-[2px] mb-1 cursor-pointer rounded-[3px]  hover:bg-[#e4e4e4] whitespace-nowrap ${!catName && 'bg-[#e4e4e4]'}`}>Hamısı</li>
                            {categories?.map((item, i) => (
                                <li onClick={() => setCatName(item.name)} key={i} className={`py-1 px-2 ml-[2px] mb-1 cursor-pointer rounded-[3px] hover:bg-[#e4e4e4] ${catName === item.name && 'bg-[#e4e4e4]'} whitespace-nowrap`}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={`w-full mt-5 flex gap-5 flex-col overflow-y-auto px-5 ${searchData?.length > 0 ? 'h-auto max-h-[70vh] lg:max-h-[50vh]' : 'lg:h-auto'}`}>
                    {searchData?.map((item, i) => (
                        item.category.name === catName ? (
                            <div onClick={() => setFlag(false)} key={i}>
                                <Link to={`/Details/${item.id}`} className="flex justify-between items-center gap-4">
                                    <div className="flex gap-5 items-center">
                                        <img className="w-12 h-16 object-cover" src={item.images[0]} alt={item.name} />
                                        <h2>{item.name}</h2>
                                    </div>
                                    <p>{item.price} $</p>
                                </Link>
                            </div>
                        ) : !catName ? (
                            <div onClick={() => setFlag(false)} key={i}>
                                <Link to={`/Details/${item.id}`} className="flex justify-between items-center gap-4">
                                    <div className="flex gap-5 items-center">
                                        <img className="w-12 h-16 object-cover" src={item.images[0]} alt={item.name} />
                                        <h2>{item.name}</h2>
                                    </div>
                                    <p>{item.price} $</p>
                                </Link>
                            </div>
                        ) : ''
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OpenSearchBar
