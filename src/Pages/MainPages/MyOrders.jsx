import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
    const navigate= useNavigate()
    const informations = [
        { title: 'My Orders', desc: 'View the progress of your order, or arrange an exchange or return', path: 'orders' },
        { title: 'Account details', desc: 'View or change your sign-in information', path: 'cabinet' },
        { title: 'Contact us', desc: 'Still need some support? Get in touch with us so we can help', path: 'contact' },
        { title: 'FAQ', desc: 'Find lots of helpful information on orders, returns and much more', path: 'faq' },
    ]
    const handleCabinet = (path) => {
        navigate(`/userinformation/${path}`)
    }
    return (
        <div className='wrapper font-["Cormorant_Garamond",_serif] flex item-start pt-5'>
            <div className="text-xl">
                <div onClick={() => navigate('/userinformation')} className="flex items-center pb-10 cursor-pointer">
                    <IoIosArrowBack className="text-2xl cursor-pointer" />
                    <p>My profile</p>
                </div>
                <ul>
                    {informations.map((info, i) => (
                        <li onClick={() => handleCabinet(info.path)} className={`pb-6 font-medium cursor-pointer ${i === 0 ? 'opacity-1' : 'opacity-50'}`}>{info.title}</li>
                    ))}
                </ul>
            </div>
            <div className="ml-12">
                <h1 className="font-medium text-3xl md:text-5xl">My Orders</h1>
                <p className="mt-4 text-xl">You have no orders</p>
            </div>
        </div>
    )
}

export default MyOrders
