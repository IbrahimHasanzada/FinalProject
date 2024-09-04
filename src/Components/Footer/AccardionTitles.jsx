import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Accarduin = ({ item }) => {
  const [activeSection, setActiveSection] = useState(null);
  const { id, title, content } = item;
  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  return (
    <div className="mb-4 md:mb-0">
      <div className="flex justify-between items-center md:cursor-default cursor-pointer" onClick={() => toggleSection(id)}>
        <h4 className="text-lg font-sans uppercase">{title}</h4>
        <span className="md:hidden">
          {activeSection === id ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>
      <ul className={`mt-2 md:block ${activeSection === id ? 'block' : 'hidden'} font-["Montserrat_Alternates",_sans-serif]`}>
        {content.map((desc, i) => (
          <li key={i} className='py-2'>
            <Link to={`${desc.path}`}>
              {desc.contentDesc}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Accarduin
