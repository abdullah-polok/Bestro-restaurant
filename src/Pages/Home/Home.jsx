import FeaturedItem from "../Shared/Featured/FeaturedItem";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
        </div>
    );
};

export default Home;