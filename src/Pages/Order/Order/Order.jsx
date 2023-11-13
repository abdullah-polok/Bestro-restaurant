import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const offered = menu.filter(item => item.category === "offered")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab menu={salad}></OrderTab>
                </TabPanel>
                <TabPanel> <OrderTab menu={pizza}></OrderTab></TabPanel>
                <TabPanel> <OrderTab menu={soup}></OrderTab></TabPanel>
                <TabPanel> <OrderTab menu={dessert}></OrderTab></TabPanel>
                <TabPanel> <OrderTab menu={drinks}></OrderTab></TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;