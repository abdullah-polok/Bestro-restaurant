import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ menu }) => {
    console.log(menu)
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                menu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;