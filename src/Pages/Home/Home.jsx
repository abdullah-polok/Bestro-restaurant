import FeaturedItem from "../Shared/Featured/FeaturedItem";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Textimonials from "./Testimonials/Textimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Textimonials></Textimonials>
        </div>
    );
};

export default Home;