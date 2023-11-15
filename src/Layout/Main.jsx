
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer';
import Navber from '../Pages/Shared/Navber/Navber';
const Main = () => {
    const location = useLocation(); ///give the current path location
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

    return (
        <div>
            {noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;