import React from 'react'
import MainLayout from '../Layout/MainLayout'
import CategoryPage from '../Pages/CategoryPage'
import Brands from '../Pages/Brands'
import Home from '../Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Details from '../Pages/Details'
import AboutUs from '../Pages/AboutUs'
import Basket from '../Pages/Basket'
import CheckOut from '../Pages/CheckOut'
import SignUp from '../Pages/SignUp'
import Login from '../Pages/Login'
import WishList from '../Pages/WishList'

export const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='SignUp' element={<SignUp />} />
                <Route path='Login' element={<Login />} />
                <Route path="CategoryPage" element={<CategoryPage />} />
                <Route path="CategoryPage/Brands" element={<Brands />} />
                <Route path="CategoryPage/Brands/Details" element={<Details />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="Basket" element={<Basket />} />
                <Route path="Basket/Checkout" element={<CheckOut />} />
                <Route path="WishList" element={<WishList />} />
            </Route>
        </>
    )
)

export default route
