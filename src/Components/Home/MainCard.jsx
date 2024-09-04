import { Link } from 'react-router-dom';

const MainCard = ({img}) => {
    return (
        <Link to={'CategoryPage'} className=' w-full relative group'>
            <div>
                <section className='w-full h-full  flex justify-center font-["Montserrat",_sans-serif] items-center absolute inset-0 z-[2] py-4 px-2 bg-[rgba(0,_0,_0,_0.2)] '>
                    <div>
                        <span className='text-[2.5em] text-[#F6F7F9]'>Kişi</span>
                    </div>
                </section>
                <section className='w-full h-full overflow-hidden'>
                    <div>
                        <img
                            className='w-full h-full transform transition-transform duration-500 group-hover:scale-110'
                            src={`/img/${img}`} alt="kisi" />
                    </div>
                </section>
            </div>
        </Link>
    );
}

export default MainCard;
