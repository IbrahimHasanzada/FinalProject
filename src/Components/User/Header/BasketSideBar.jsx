import { FaXmark } from "react-icons/fa6";
import BasketProducts from "../Basket/BasketProducts";
import OrderSummary from "../Basket/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../../Store/BasketSlice";
import { useGetAllCartQuery } from "../../../Store/EmporiumApi";
import { PiBagSimple } from "react-icons/pi";
import Loading from "../../Loading";

const BasketSideBar = () => {
    const handleCloseBasket = () => { dispatch(setBasket(false)) }
    const { data: getAllBasketData, isLoading } = useGetAllCartQuery()
    const { basket } = useSelector(state => state.basket)
    const dispatch = useDispatch()
    return (
        <div className={`fixed top-0 left-0 right-0  w-[100%] h-[100vh] duration-200 ${basket ? 'bg-[#0000006e]' : 'pointer-events-none'}`}>
            <div className={`
            fixed z-10 top-0 bottom-0 bg-white h-[100vh] flex flex-col  max-w-[350px] w-full border-l 
            ${basket ? 'right-0' : '-right-full'} ${getAllBasketData?.length > 0 ? 'justify-between' : 'justify-start'} duration-500`}>
                <section className='px-5 pt-5 pb-10 w-full flex justify-between items-center border-b font-["Cormorant_Garamond",_serif]'>
                    <p className="text-xl leading-6">Shopping bag</p>
                    <button onClick={handleCloseBasket}>
                        <FaXmark className="text-xl" />
                    </button>
                </section>
                {getAllBasketData?.length > 0 ? (
                    <>
                        <section className="h-full overflow-y-scroll">
                            {isLoading ?
                                <Loading />
                                :
                                <>
                                    {getAllBasketData?.map((product, productIndex) => (
                                        <BasketProducts key={productIndex} product={product} />
                                    ))}
                                </>
                            }
                        </section>
                        <section>
                            <OrderSummary />
                        </section>
                    </>
                ) : (
                    <div className="flex flex-col items-center p-8">
                        <PiBagSimple className="text-8xl" />
                        <h1 className='text-3xl mt-8 font-["Cormorant_Garamond",_serif]'>Your cart is empty</h1>
                    </div>

                )}
            </div>
        </div>
    );
}

export default BasketSideBar;
