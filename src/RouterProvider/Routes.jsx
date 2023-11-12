import {
    createBrowserRouter,
} from "react-router-dom";
import ContactUs from "../../../../Final Project Part-1/bistro-restaurant/src/Pages/ContactUs/ContactUs";
import OurMenu from "../../../../Final Project Part-1/bistro-restaurant/src/Pages/OurMenu/OurMenu";
import OurShop from "../../../../Final Project Part-1/bistro-restaurant/src/Pages/OurShop/OurShop";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

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
                element: <OurMenu></OurMenu>
            }, {
                path: '/ourshop',
                element: <OurShop></OurShop>
            }
        ]
    },

]);

