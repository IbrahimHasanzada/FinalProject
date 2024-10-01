import { CiUser, CiHeart } from "react-icons/ci";
import { PiBagSimple } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import OpenSearchBar from "./OpenSearchBar";
import { Link, useNavigate } from "react-router-dom";
import BasketSideBar from "./BasketSideBar";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../../Store/BasketSlice";
import UserLogin from "./UserLogin";
import { setUser } from "../../../Store/UserLoginSlice";
import { useGetAllCartQuery, useGetAllCategoryQuery } from "../../../Store/EmporiumApi";
import MobileHeader from "./MobileHeader";
import { FaXmark } from "react-icons/fa6";
import { setCatId } from "../../../Store/CategoryIdSlice";
const Header = () => {
    const userData = JSON.parse(localStorage.getItem('user'))
    const { data: getAllCategories } = useGetAllCategoryQuery()
    const { data: getAllBasketData } = useGetAllCartQuery()
    const { liked } = useSelector(state => state.liked)
    const [flag, setFlag] = useState(false)
    const [mobile, setMobile] = useState(false)
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleOpenSearch() { setFlag(true) }
    function handleOpenBasket() { dispatch(setBasket(true)) }
    const [basketData, setBasketData] = useState([])
    useEffect(() => {
        userData ? setBasketData(getAllBasketData) : setBasketData([])
    }, [userData])
    const filterByCategory = (id) => {
        dispatch(setCatId(id))
        navigate({ pathname: 'categorypage/products/all', search: `?categoryId=${id}` })
    }
    const filterBySubCategory = (id, name) => {
        navigate({ pathname: '/products/all', search: `?subcategoryId=${id}` })
        localStorage.setItem('subcategory', name)
    }
    const changeToUser = () => { if (userData) { navigate('/userinformation') } else dispatch(setUser()) }
    const navBarImages = ['women-clothing.jpg', 'men-clothing.jpg', 'boys-clothing.jpg', 'necklaces.jpg', 'fragrance.jpg', '2-235-bedroom.jpg']
    return (
        <header className='py-5 md:p-5 sticky z-30 lg:z-40 right-0 left-0 top-0 font-["Montserrat",_sans-serif] bg-white  '>
            <section className="wrapper flex justify-between py-4">
                <div className="flex lg:w-[45%]">
                    <div className="flex lg:hidden gap-4">
                        <button onClick={() => setMobile(!mobile)}>
                            {mobile ? <FaXmark className="text-3xl cursor-pointer" /> : <RxHamburgerMenu className="text-3xl cursor-pointer" />}
                        </button>
                        <button onClick={handleOpenSearch}>
                            <IoIosSearch className="text-3xl cursor-pointer" />
                        </button>
                    </div>
                    <ul className={`hidden lg:flex w-full overflow-scroll`}>
                        {getAllCategories && getAllCategories.map((item, i) => {
                            return (
                                <div key={i} className='group'>
                                    <li onClick={() => filterByCategory(item.id)} key={i} className='py-1 px-2 ml-[2px] text-nowrap mb-1 cursor-pointer rounded-[3px] hover:bg-[#e4e4e4]'>{item.name}</li>
                                    <div className='absolute w-screen left-0 h-auto z-40  justify-between  py-10 bg-white hidden group-hover:flex px-12 shadow-[rgba(0,0,15,0.5)_5px_5px_4px_0px]'>
                                        <div>
                                            <p className='cursor-pointer hover:underline text-xs font-semibold '>View all</p>
                                            {item.Subcategory.length > 0 && item.Subcategory.map((sub, i) => {
                                                return <p key={i} onClick={() => filterBySubCategory(sub.id, sub.name)} className='my-2 cursor-pointer hover:underline'>{sub.name}</p>
                                            })}
                                        </div>
                                        <div>
                                            <img src={`/img/${navBarImages[i]}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>

                </div>
                <div className="w-[130px] h-[30px] lg:w-[155px] lg:h-[30px]">
                    <Link to="/">
                        <img src="/img/tradium.png" alt="Tradium Logo" />
                    </Link>
                </div>
                <div className=" flex gap-4 lg:w-[45%] justify-end">
                    <div className="relative hidden lg:flex  items-start">
                        <button onClick={() => changeToUser()} className="flex justify-center items-center">
                            <CiUser className="text-2xl " />
                            {userData && <span className="text-md pl-2.5">{userData?.name}</span>}
                        </button>
                        {!userData &&
                            <div className={`absolute top-10 right-0  hidden lg:block`}>
                                {user ? <UserLogin /> : ''}
                            </div>
                        }
                    </div>
                    <button className="relative flex justify-center items-start">
                        {liked > 0 &&
                            <span className="absolute bottom-3 -right-1 rounded-full px-1 bg-[#000] text-xs text-white">{liked}</span>
                        }
                        <Link to='WishList'>
                            <CiHeart className="text-2xl" />
                        </Link>
                    </button>

                    <button className="relative flex justify-center items-start" onClick={handleOpenBasket}>
                        {basketData?.length > 0 &&
                            <span className="absolute bottom-3 -right-1 rounded-full px-1 bg-[#000] text-xs text-white">{getAllBasketData.length}</span>
                        }
                        <PiBagSimple className="text-2xl" />
                    </button>
                </div>
            </section>
            <section className="wrapper hidden lg:flex justify-end pb-4">
                <form className=" h-11 w-60 pl-5 pr-2 flex items-center justify-between border">
                    <input onClick={handleOpenSearch} className="outline-none" type="text" placeholder="Search..." />
                    <IoIosSearch className="text-2xl" />
                </form>
            </section>
            <OpenSearchBar flag={flag} setFlag={setFlag} />
            <BasketSideBar />
            <MobileHeader mobile={mobile} setMobile={setMobile} />
        </header>

    )
}

export default Header
