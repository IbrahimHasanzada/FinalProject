import DiscountProducts from '../../Components/Home/DiscountProducts'
import MainSection from '../../Components/Home/MainSection'
import HeadSection from '../../Components/Home/HeadSection'
const Home = () => {
  return (
    <main className='wrapper  font-["Montserrat",_sans-serif]'>
      <section>
        <HeadSection />
      </section>
      <section>
        <MainSection />
      </section>
      <section className='my-10'>
        <DiscountProducts />
      </section>
    </main>
  )
}

export default Home
