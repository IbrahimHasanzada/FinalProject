import { CiCreditCard1 } from "react-icons/ci";
import { TbBus } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import SliderSocial from './SliderSocial'
import FooterAccordion from './FooterAccordion';
import BlackButton from '../../BlackButton';
const Footer = () => {
  return (
    <footer className='wrapper  font-["Montserrat",_sans-serif]'>
      <section className='my-8'>
        <h2 className='uppercase mb-4 text-sm inline-block pl-2'>@tradiumbaku</h2>
        <SliderSocial />
      </section>
      <section className='bg-[#F7F7F2] lg:py-8 py-8 flex justify-center items-center flex-col'>
        <div className=' p-4  max-w-[420px]'>
          <div className='py-4 text-center font-["Cormorant_Garamond",_serif]'>
            <h2 className='text-3xl lg:text-[2.65em]'>Join our newsletter</h2>
          </div>
          <div className='py-4 text-center'>
            <span>By signing up to Tradium, you’ll be the first to hear about special offers, our new arrivals, new brands and fashion trends.</span>
          </div>
        </div>
        <div className='mt-4 mb-2 p-2 md:flex md:w-[472px] '>
          <input type="text" className='px-5 h-11 border w-full md:w-[90%]' placeholder='Enter your email address' />
          <button className='my-4 md:my-0 md:ml-2 h-11 w-full md:w-[50%] rounded-md'>
            <BlackButton title='Subcribe' path='#' />
          </button>
        </div>
      </section>
      <section className='py-10  flex gap-[10px] flex-col md:flex-row  justify-between'>
        <div className='py-4 px-5 border  flex gap-4 w-full md:w-[31%]'>
          <CiCreditCard1 className="text-3xl" />
          <span className="text-sm md:text-base flex items-center">Safe & Easy Payments</span>
        </div>
        <div className='py-4 px-5 border flex gap-4 w-full md:w-[31%]'>
          <TbBus className="text-3xl" />
          <span className="text-sm md:text-base flex items-center">Express delivery</span>
        </div>
        <div className='py-4 px-5 border flex gap-4 items-center w-full md:w-[31%]'>
          <BsBox2 className="text-3xl" />
          <span className="text-sm md:text-base flex items-center">Quick & easy returns</span>
        </div>
      </section>
      <section className='py-5'>
        <FooterAccordion />
      </section>
      <section>
        <div>© Copyright 2024 Tradium.</div>
      </section>
    </footer>
  )
}

export default Footer
