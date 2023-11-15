import {
    createBrowserRouter,
} from "react-router-dom";
import ContactUs from "../../../../Final Project Part-1/bistro-restaurant/src/Pages/ContactUs/ContactUs";
import OurMenu from "../../../../Final Project Part-1/bistro-restaurant/src/Pages/OurMenu/OurMenu";
import OurShop from "../../../../Final Project Part-1/bistro-restaurant/src/Pages/OurShop/OurShop";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Order from "../Pages/Order/Order/Order";
import Menu from "../Pages/OurMenu/Menu";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            }, {
                path: '/ourmenu',
                element: <Menu></Menu>
            }, {
                path: '/ourshop',
                element: <OurShop></OurShop>
            }, {
                path: '/order/:category',
                element: <Order></Order>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

]);

