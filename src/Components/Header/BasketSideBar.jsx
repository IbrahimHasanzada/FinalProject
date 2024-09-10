import { FaXmark } from "react-icons/fa6";
import BasketProducts from "../Basket/BasketProducts";
import OrderSummary from "../Basket/OrderSummary";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../Store/BasketSlice";

const BasketSideBar = () => {
    const handleCloseBasket = () => { dispatch(setBasket(false)) }
    const {basket} = useSelector(state => state.basket)
    const dispatch = useDispatch()
    return (
        <div className={`fixed top-0 left-0 right-0  w-[100%] h-[100vh] duration-200 ${basket ? 'bg-[#0000006e]' : 'pointer-events-none'}`}>
            <div className={`
            fixed z-10 top-0 bottom-0 bg-white h-[100vh] flex flex-col justify-between max-w-[350px] w-full border-l 
            ${basket ? 'right-0' : '-right-full'} duration-500`}>
                <section className='px-5 pt-5 pb-10 w-full flex justify-between items-center border-b font-["Cormorant_Garamond",_serif]'>
                    <p className="text-xl leading-6">Shopping bag</p>
                    <button onClick={handleCloseBasket}>
                        <FaXmark className="text-xl" />
                    </button>
                </section>
                <section className="h-full overflow-y-scroll">
                    <BasketProducts />
                </section>
                <section>
                    <OrderSummary />
                </section>
            </div>
        </div>
    );
}

export default BasketSideBar;
