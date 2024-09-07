// Breadcrumb.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className='mb-2 font-["Cormorant_Garamond",_serif] font-medium' aria-label="breadcrumb">
      <ol className="breadcrumb flex gap-2">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={index} className="breadcrumb-item active" aria-current="page">
             /  {value.charAt(0).toUpperCase() + value.slice(1)}
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
             / <Link to={routeTo}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
            </li>
          )
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
