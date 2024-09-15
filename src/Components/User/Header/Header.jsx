import { CiUser, CiHeart } from "react-icons/ci";
import { PiBagSimple } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import OpenSearchBar from "./OpenSearchBar";
import { Link } from "react-router-dom";
import BasketSideBar from "./BasketSideBar";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../../Store/BasketSlice";
import UserLogin from "./UserLogin";
import { setUser } from "../../../Store/UserLoginSlice";
import { useGetAllCategoryQuery } from "../../../Store/EmporiumApi";

const Header = () => {
    const {data:getAllCategories} = useGetAllCategoryQuery()
    const [flag, setFlag] = useState(false)
    const { basket } = useSelector(state => state.basket)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()
    function handleOpenSearch() { setFlag(true) }
    function handleOpenBasket() { dispatch(setBasket(true)) }
    const categories = ['Qadın', 'Kişi', 'Uşaq', 'Gözəllik', 'Zinət əşyaları', 'Ev', 'Dizaynerlər']

    return (
        <header className='wrapper  sticky z-30 lg:z-40 right-0 left-0 top-0 font-["Montserrat",_sans-serif] bg-white  '>
            <section className=" flex justify-between py-4">
                <div className="flex lg:w-[45%]">
                    <div className="flex lg:hidden gap-4">
                        <RxHamburgerMenu className="text-3xl cursor-pointer" />
                        <button onClick={handleOpenSearch}>
                            <IoIosSearch className="text-3xl cursor-pointer" />
                        </button>
                    </div>
                    <ul className='hidden lg:flex w-full overflow-scroll'>
                        {getAllCategories?.map((item, i) => (
                            <li key={i} className="py-1 px-2 ml-[2px] text-nowrap mb-1 cursor-pointer rounded-[3px] hover:bg-[#e4e4e4]">{item.name}</li>
                        ))}
                    </ul>

                </div>
                <div className="w-[140px] h-[30px] lg:w-[165px] lg:h-[40px]">
                    <Link to="/">
                        <img src="/img/emporium-logo.png" alt="emporiumLogo" />
                    </Link>
                </div>
                <div className="relative flex gap-4 lg:w-[45%] justify-end">
                    <div className="">
                        <button onClick={() => dispatch(setUser())} className="flex justify-center items-start">
                            <CiUser className="text-2xl lg:block hidden" />
                        </button>
                        <div className="absolute right-0 hidden lg:block">
                            {user ? <UserLogin /> : ''}
                        </div>
                    </div>
                    <Link to='WishList'>
                        <CiHeart className="text-2xl" />
                    </Link>
                    <button className="flex justify-center items-start" onClick={handleOpenBasket}>
                        <PiBagSimple className="text-2xl" />
                    </button>
                </div>
            </section>
            <section className="hidden lg:flex justify-end pb-4">
                <form className=" h-11 w-60 pl-5 pr-2 flex items-center justify-between border">
                    <input onClick={handleOpenSearch} className="outline-none" type="text" placeholder="Axtar..." />
                    <IoIosSearch className="text-2xl" />
                </form>
            </section>
            <OpenSearchBar flag={flag} setFlag={setFlag} />
            <BasketSideBar />
        </header>

    )
}

export default Header
