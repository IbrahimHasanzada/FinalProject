import DiscountProducts from '../../Components/User/Home/DiscountProducts'
import MainSection from '../../Components/User/Home/MainSection'
import HeadSection from '../../Components/User/Home/HeadSection'
import { useGetAllCategoryQuery } from '../../Store/EmporiumApi'
import Loading from '../../Components/Loading'
const Home = () => {
  const { data: getAllCategories, isLoading } = useGetAllCategoryQuery()
  return (
    <main className='wrapper font-["Montserrat",_sans-serif]'>
      {isLoading ?
        <Loading />
        :
        <>
          <section>
            <HeadSection getAllCategories={getAllCategories} />
          </section>
          <section>
            <MainSection getAllCategories={getAllCategories} />
          </section>
          <section className='my-10'>
            <DiscountProducts />
          </section>
        </>
      }
    </main>
  )
}

export default Home
