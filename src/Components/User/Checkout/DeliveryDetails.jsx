import { SlPencil } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { setCheckout } from '../../../Store/CheckOutSlice';

const DeliveryDetails = () => {
    const formReceiver = JSON.parse(localStorage.getItem('receiver'))
    const { checkout } = useSelector(state => state.checkout)
    const { delivery } = useSelector(state => state.delivery)
    const {deliveryOrder} = useSelector(state => state.deliveryOrder)
    const dispatch = useDispatch()
    return (
        <div>
            <section className='font-["Montserrat",_sans-serif]'>
                <h2 className='text-xl font-["Cormorant_Garamond",_serif]'>Delivery Details</h2>
                <section className="py-8 flex">
                    <div className='text-sm w-full'>
                        <h2 className="mb-5 font-medium">Customer information</h2>
                        {formReceiver ? (
                            <ul className='mb-6'>
                                <li className='mb-1'>{formReceiver.first_name} {formReceiver.last_name} </li>
                                <li className='mb-1'>{formReceiver.mobile_number}</li>
                                <li className='mb-1'>{formReceiver.email}</li>
                                <li className='mb-1'>{formReceiver.address}</li>
                            </ul>
                        ) : (
                            <p className="medium">No delivery details available.</p>
                        )}
                        <button className="text-sm px-1 border rounded-sm h-9 hover:border-black border-white duration-300 w-auto flex justify-center items-center" onClick={() => dispatch(setCheckout(1))}>
                            <SlPencil />
                            <span className="ml-2">CHANGE</span>
                        </button>
                    </div>
                    <div className={`text-sm w-full ${delivery ? 'hidden' : 'block'}`}>
                        <h2 className="mb-5 font-medium">Delivery options</h2>
                        <div className="mb-6">
                            <span>{deliveryOrder ? 'Urgent - 15 $' : 'Standart - Free'} </span>
                        </div>
                        <button className="text-sm px-1 border rounded-sm h-9 hover:border-black border-white duration-300 w-auto flex justify-center items-center" onClick={() => dispatch(setCheckout(1))}>
                            <SlPencil />
                            <span className="ml-2">CHANGE</span>
                        </button>
                    </div>
                </section>
            </section>

        </div>
    );
};

export default DeliveryDetails;
