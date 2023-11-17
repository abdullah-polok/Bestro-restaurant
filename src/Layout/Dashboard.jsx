import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* make a drawer and dashboard sideber */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to={'/dashborad/userhome'}><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to={'/dashborad/reservation'}><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to={'/dashborad/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <li><NavLink to={'/dashborad/review'}><FaAd></FaAd>Add a Review</NavLink></li>
                    <li><NavLink to={'/dashborad/bookings'}><FaList></FaList>My Bookings</NavLink></li>
                </ul>
            </div>

            {/* Dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;