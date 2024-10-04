import React from 'react'
import BlackButton from '../../BlackButton'
import UnderlineButton from '../../UnderlineButton'
import { useDispatch, useSelector } from 'react-redux'
import { setBasket } from '../../../Store/BasketSlice'
import { useGetAllCartQuery } from '../../../Store/EmporiumApi'

const OrderSummary = ({ addToCard, checkout }) => {
  const {deliveryOrder} = useSelector(state => state.deliveryOrder)
  const {delivery} = useSelector(state => state.delivery)
  const dispatch = useDispatch()
  const { data: getAllBasketData } = useGetAllCartQuery()
  const totalPrice = getAllBasketData?.reduce((acc, item) => acc + item.count >= 1 ?  item.product_id.price*item.count : item.product_id.price, 0);
  return (
    <section className={`flex flex-col items-center justify-center py-5 mt-1 font-["Montserrat",_sans-serif] ${addToCard ? 'm-0' : 'm-5 border-t'}`}>
      <h2 className={`w-full border-b text-xl pb-2 font-["Cormorant_Garamond",_serif] ${addToCard ? 'inline-block' : 'hidden'}`}>Order summary</h2>
      <ul className={`w-full uppercase text-sm leading-4 ${addToCard ? 'py-4' : 'py-0'}`}>
        <li className="flex items-center justify-between w-full mb-3">
          <span>Items total</span>
          <span>{totalPrice} $</span>
        </li>
        <li className={`items-center justify-between w-full mb-3 ${delivery ? 'hidden' : 'flex'}`}>
          <span>Delivery</span>
          <span>{deliveryOrder ? '15 $' : 'FREE'}</span>
        </li>
        <li className={`mb-4 ${addToCard ? 'block' : 'hidden'}`}>
          <h2 className='text-sm uppercase mb-3'>Promo code (Mobile number)</h2>
          <form className=" h-11 w-full px-5 flex items-center justify-between border">
            <input className="outline-none text-base" type="text" placeholder="Mobile number" />
          </form>
        </li>
        <li className="flex items-center justify-between w-full mb-3">
          <span>Subtotal</span>
          <span>{deliveryOrder ?  totalPrice + 15 : totalPrice} $</span>
        </li>
      </ul>

      <div className={`w-full flex-col justify-center items-center ${checkout ? 'hidden' : 'flex'}`}>
        <button onClick={() => dispatch(setBasket(false))} className="h-11 w-full my-4">
          <BlackButton
            title={`${addToCard ? 'Continue to checkout' : 'Go To Cart'}`}
            path={`${addToCard ? 'checkout' : 'basket'}`} />
        </button>
        <div className={`w-[50%] ${addToCard ? 'hidden' : 'block'}`}>
          <button onClick={() => dispatch(setBasket(false))}>
            <UnderlineButton title='CONTINUE SHOPPING' path="#" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OrderSummary
