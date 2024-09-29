import { Outlet, useLocation } from 'react-router-dom'
import Header from '../Components/User/Header/Header'
import Footer from '../Components/User/Footer/Footer'
import { useEffect } from 'react';

const MainLayout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname,window.location.search]);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
