import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCatId } from '../../../Store/CategoryIdSlice';

const MainCard = ({ item }) => {
    const { id, name } = item
    const path = process.env.PUBLIC_URL + '/img/'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const filterByCategory = () => {
        dispatch(setCatId(id))
        navigate({ pathname: 'categorypage/products/all', search: `?categoryId=${id}` })

    };
    const categorySection = [
        { img: 'kidsCategory.jpg', title: 'Kids' },
        { img: 'beautyCategory.jpg', title: 'Beauty' },
        { img: 'jewelleryCategory.jpg', title: 'Jewellery' },
        { img: 'homeCategory.jpg', title: 'Home' }
    ]
    return (
        <div onClick={filterByCategory} className=' w-full relative group'>
            <div>
                <section className='w-full h-full  flex justify-center font-["Montserrat",_sans-serif] items-center absolute inset-0 z-[2] py-4 px-2 bg-[rgba(0,_0,_0,_0.2)] '>
                    <div>
                        <span className='text-3xl md:text-[2.5em] text-[#F6F7F9]'>{name}</span>
                    </div>
                </section>
                <section className='w-full h-full overflow-hidden'>
                    {categorySection.map((item, index) => (
                        item.title === name &&
                        <div key={index}>
                            <img
                                className='w-full h-full transform transition-transform duration-500 group-hover:scale-110'
                                src={path  + item.img} alt={`Image-${item.title}`} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

export default MainCard;
