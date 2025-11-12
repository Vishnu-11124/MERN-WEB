
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "../Layout"
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import Cart from "../Pages/Cart"
import Login from "../Pages/LoginPage"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>    
    )
)

export default router