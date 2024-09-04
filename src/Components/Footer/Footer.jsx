import React, { useState } from 'react';
import { CiCreditCard1 } from "react-icons/ci";
import { TbBus } from "react-icons/tb";
import { BsBox2 } from "react-icons/bs";
import SliderSocial from './SliderSocial'
import FooterAccordion from './FooterAccordion';
import BlackButton from '../BlackButton';
const Footer = () => {


  return (
    <footer className='wrapper font-["Montserrat",_sans-serif]'>
      <section className='mb-8'>
        <h2 className='uppercase mb-4 text-sm inline-block'>@emoporiumbaku</h2>
        <SliderSocial />
      </section>
      <section className='bg-[#F7F7F2] lg:py-8 py-8 flex justify-center items-center flex-col'>
        <div className=' p-4  max-w-[420px]'>
          <div className='py-4 text-center font-["Cormorant_Garamond",_serif]'>
            <h2 className='text-3xl lg:text-[2.65em]'>Xəbələrimizi izləyin</h2>
          </div>
          <div className='py-4 text-center'>
            <span>Emporium-da qeydiyyatdan keçməklə, xüsusi təkliflər, yeniliklər, yeni brendlər və dəb trendləri haqqında ilk eşidən Siz olacaqsınız!</span>
          </div>
        </div>
        <div className='mt-4 mb-2 p-2 md:flex md:w-[472px] '>
          <input type="text" className='px-5 h-11 border w-full md:w-[90%]' placeholder='Email ünvanınızı daxil edin' />
          <button className='my-4 md:my-0 md:ml-2 h-11 w-full md:w-[50%] rounded-md'>
            <BlackButton title='Subcribe' path='#' />
          </button>
        </div>
      </section>
      <section className='py-10 flex gap-[10px] flex-col md:flex-row  justify-between'>
        <div className='py-4 px-5 border  flex gap-4 w-full md:w-[31%]'>
          <CiCreditCard1 className="text-3xl" />
          <span className="text-sm md:text-base flex items-center">Güvənli ödəniş üsulları</span>
        </div>
        <div className='py-4 px-5 border flex gap-4 w-full md:w-[31%]'>
          <TbBus className="text-3xl" />
          <span className="text-sm md:text-base flex items-center">Sürətli çatdırılma</span>
        </div>
        <div className='py-4 px-5 border flex gap-4 items-center w-full md:w-[31%]'>
          <BsBox2 className="text-3xl" />
          <span className="text-sm md:text-base flex items-center">Sifarişin sürətli və asan qaytarılması</span>
        </div>
      </section>
      <section className='py-5'>
        <FooterAccordion />
      </section>
      <section>
        <div>© Copyright 2024 Emporium.</div>
      </section>
    </footer>
  )
}

export default Footer
