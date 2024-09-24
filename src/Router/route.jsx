import MainLayout from '../Layout/MainLayout'
import CategoryPage from '../Pages/MainPages/CategoryPage'
import Brands from '../Pages/MainPages/Brands'
import Home from '../Pages/MainPages/Home'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Details from '../Pages/MainPages/Details'
import AboutUs from '../Pages/MainPages/AboutUs'
import Basket from '../Pages/MainPages/Basket'
import CheckOut from '../Pages/MainPages/CheckOut'
import SignUp from '../Pages/MainPages/SignUp'
import Login from '../Pages/MainPages/Login'
import WishList from '../Pages/MainPages/WishList'
import Dashboard from '../Layout/Dashboard'
import Auth from './Auth'
import ProductCategory from '../Pages/Dashboard/ProductCategory'
import Products from '../Pages/Dashboard/Products'
import ProductBrands from '../Pages/Dashboard/ProductBrands'
import UserInformation from '../Pages/MainPages/UserInformation'
import UpdateUser from '../Components/User/Cabinet/UpdateUser'
export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/admin' element={
                <Auth>
                    <Dashboard />
                </Auth>}>
                {/* Redirect to /admin/category when /admin is accessed */}
                <Route index element={<ProductCategory />} />
                <Route path='category' element={<ProductCategory />} />
                <Route path='products' element={<Products />} />
                <Route path='brands' element={<ProductBrands />} />
            </Route>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='SignUp' element={<SignUp />} />
                <Route path='Login' element={<Login />} />
                <Route path='UserInformation' element={<UserInformation />} />
                <Route path='UserInformation/cabinet' element={<UpdateUser />} />
                <Route path="CategoryPage/products/all" element={<CategoryPage />} />
                <Route path="products/all" element={<Brands />} />
                <Route path="Details/:productsId" element={<Details />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="Basket" element={<Basket />} />
                <Route path="Basket/Checkout" element={<CheckOut />} />
                <Route path="WishList" element={<WishList />} />
            </Route>
        </>
    )
)

export default route
