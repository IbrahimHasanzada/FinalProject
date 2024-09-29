import { useState } from 'react'
import BasketProducts from '../../Components/User/Basket/BasketProducts'
import OrderSummary from '../../Components/User/Basket/OrderSummary'
import { useGetAllCartQuery } from '../../Store/EmporiumApi'
import Loading from '../../Components/Loading'
import { Helmet } from 'react-helmet-async'
const Basket = () => {
    const [addToCard, setAddToCard] = useState(true)
    const { data: getAllBasketData, isLoading } = useGetAllCartQuery()
    return (
        <div className='wrapper'>
            <Helmet>
                <title>Tradium | Basket</title>
                <meta name="description" content="Basket Page" />
            </Helmet>
            <div className='mb-4 '>
                <h2 className='text-3xl md:text-5xl font-["Cormorant_Garamond",_serif]'>Shopping bag</h2>
                <p className='mt-2 font-["Montserrat",_sans-serif]'>{getAllBasketData?.length} items</p>
            </div>
            <section className='w-full flex md:flex-row flex-col items-start justify-start'>
                <section className='w-full mt-5'>
                    {isLoading ?
                        <Loading />
                        :
                        <>
                            {getAllBasketData?.map((product, productIndex) => (
                                <BasketProducts key={productIndex} product={product} addToCard={addToCard} />
                            ))}
                        </>
                    }
                </section>
                <section className='w-full h-full md:w-[30%] md:ml-12  md:sticky md:top-32'>
                    <OrderSummary addToCard={addToCard} />
                </section>
            </section>
        </div>
    )
}

export default Basket
