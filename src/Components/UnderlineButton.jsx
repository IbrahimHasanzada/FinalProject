import { Link } from "react-router-dom"
const HoverButton = ({ title, path }) => {
    return (
        <Link to={path} className='pb-1 border-black inline-block font-["Montserrat",_sans-serif]'>
            <div className='uppercase text-sm group'>
                <span>{title}</span>
                <div className='h-[1.5px] opacity-1 w-full bg-black group-hover:w-0  group-hover:opacity-0 mx-auto duration-300'></div>
            </div>
        </Link>
    )
}

export default HoverButton
