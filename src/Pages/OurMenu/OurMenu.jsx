
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/menu-bg.png'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';


const OurMenu = () => {
    const [menu] = useMenu
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>
            {/* main cover */}
            <SectionTitle subheading={"Don't Missed"} heading={"Today's Offer"}></SectionTitle>

            {/* Offer menu items */}
            <MenuCategory items={offered} title={"Offered"}></MenuCategory>
        </div>
    );
};

export default OurMenu;