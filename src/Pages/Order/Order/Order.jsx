import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react'
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    // console.log(menu)
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            <Helmet>
                <title>Bistro | Order
                </title>
            </Helmet>
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