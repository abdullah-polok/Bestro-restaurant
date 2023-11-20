import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()

    //TODO : get isadmin value from the database
    ///destructuring like array since send as a array
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            {/* make a drawer and dashboard sideber */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {/* show only admin user */}
                    {
                        isAdmin ? <>
                            <li><NavLink to={'/dashborad/adminhome'}><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to={'/dashborad/addItems'}><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to={'/dashborad/managerItems'}><FaList></FaList> Manage Items</NavLink></li>
                            <li><NavLink to={'/dashborad/bookings'}><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to={'/dashborad/users'}><FaUsers></FaUsers> All Users</NavLink></li>
                        </>
                            :
                            <>
                                {/* <li><NavLink to={'/dashborad/userhome'}><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to={'/dashborad/reservation'}><FaCalendar></FaCalendar>Reservation</NavLink></li>
                                <li><NavLink to={'/dashborad/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                                <li><NavLink to={'/dashborad/review'}><FaAd></FaAd>Add a Review</NavLink></li>
                                <li><NavLink to={'/dashborad/bookings'}><FaList></FaList>My Bookings</NavLink></li> */}

                            </>
                    }
                    {/* Shared navlink for admin and common user*/}
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaSearch></FaSearch>Menu</NavLink></li>
                    <li><NavLink to={'/order/contact'}><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>


            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-8 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;