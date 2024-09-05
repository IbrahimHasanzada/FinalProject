import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const BlackButton = ({ title, path }) => {
    return (
        <Link to={`${path}`}
            className="uppercase text-sm text-white bg-black h-11 w-full  flex justify-center items-center 
                        rounded-md hover:bg-transparent hover:text-black hover:border border-black duration-200">
            {title}
        </Link>
    )
}

export default BlackButton
