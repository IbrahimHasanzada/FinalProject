import { Outlet } from 'react-router-dom'
import Header from '../Components/User/Header/Header'
import Footer from '../Components/User/Footer/Footer'

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
