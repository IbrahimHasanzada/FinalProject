import { Helmet } from "react-helmet-async";
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const informations = [
    { title: 'My Orders', desc: 'View the progress of your order, or arrange an exchange or return', path: 'orders' },
    { title: 'Account details', desc: 'View or change your sign-in information', path: 'cabinet' },
    { title: 'Contact us', desc: 'Still need some support? Get in touch with us so we can help', path: 'contact' },
    { title: 'FAQ', desc: 'Find lots of helpful information on orders, returns and much more', path: 'faq' },
]
const UserInformation = () => {
    const userData = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const SignOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
        toast.success('You have successfully signed out')
    }
    const handleCabinet = (path) => {
        navigate(`${path}`)
    }
    return (
        <div className='max-w-[1440px] wrapper mx-auto '>
            <Helmet>
                <title>Tradium | Cabinet</title>
                <meta name="description" content="Cabinet Page" />
            </Helmet>
            {userData ? (
                <section className='my-5 flex items-center md:items-start flex-col md:flex-row gap-20'>
                    <section className="relative  items-center">
                        <div className='w-52 h-52'>
                            <img className="rounded-full h-full w-full object-cover" src={userData?.user_img} alt={userData?.id} />
                        </div>
                    </section>
                    <section className="w-full">
                        <section className="w-full">
                            <div className='w-full flex justify-between flex-col xs:flex-row gap-4  mb-10'>
                                <h2 className='text-[2em] font-["Cormorant_Garamond",_serif] font-medium'>Hello, {userData?.name} </h2>
                                <button onClick={() => SignOut()} className="flex items-center text-xl">
                                    <PiSignOutBold />
                                    <span className="ml-2.5">Logout</span>
                                </button>
                            </div>
                        </section>
                        <section className="flex items-start flex-wrap gap-7">
                            {informations.map((info, i) => (
                                <div onClick={() => handleCabinet(info.path)} key={i} className="flex justify-between items-start flex-col w-full lg:max-w-80 p-6 cursor-pointer border border-[#EAEAE6] hover:border-black">
                                    <h2 className="mb-4 font-medium text-black">{info.title}</h2>
                                    <p className="text-[#777]">{info.desc}</p>
                                </div>
                            ))}
                        </section>
                    </section>
                </section>
            ) : (
                <div className="w-full text-center">
                    <h2 className='text-5xl font-["Cormorant_Garamond",_serif] font-medium'>Page Not Found</h2>
                </div>
            )}
        </div>
    )
}

export default UserInformation
