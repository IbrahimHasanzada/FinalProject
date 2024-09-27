import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import AccordionTitles from './AccardionTitles'

const FooterAccordion = () => {


  const accordionData = [
    {
      id: 1,
    title: 'Emporium',
      content: [
        { contentDesc: 'About Us', path: 'aboutus'},
        { contentDesc: 'Store Information', path: '#' },
      ]
    },
    {
      id: 2,
      title: 'Costumer Service',
      content: [
        { contentDesc: 'Gift Cards', path: '#' },
        { contentDesc: 'Loyalty Program', path: '#' },
        { contentDesc: 'FAQ', path: '#' },
        { contentDesc: 'Contact Us', path: '#' },
      ]
    },
    {
      id: 3,
      title: 'Online Shopping',
      content: [
        { contentDesc: 'Delivery Terms', path: '#' },
        { contentDesc: 'Return  And Exchange', path: '#' },
        { contentDesc: 'Payment Methods', path: '#' },
      ]
    },
    {
      id: 4,
      title: 'Store Contact',
      content: [
        { contentDesc: '+994 51 225 96 96' },
        { contentDesc: '51, 153 Neftchiler Avenue' },
      ]
    },
  ]

  const socialLogo = [<FaFacebookF className='text-2xl' />, <FaInstagram className='text-2xl' />, <FaWhatsapp className='text-2xl' />]

  return (
    <div className='flex md:flex-row md:justify-between flex-col gap-2'>
      {accordionData.map((item, i) => (
        <AccordionTitles item={item} key={i} />
      ))}
      <div className='mb-4 md:mb-0'>
        <div className="flex justify-between items-center md:cursor-default cursor-pointer">
          <h4 className="text-lg font-sans uppercase">Social Media</h4>
          <span className="md:hidden">
          </span>
        </div>
        <div className={`mt-2 md:block`} >
          <div className='flex mt-4 gap-2'>
            {socialLogo.map((item, i) => (
            <span key={i} className='w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-black hover:bg-black hover:text-white cursor-pointer'>
              {item}
            </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterAccordion
