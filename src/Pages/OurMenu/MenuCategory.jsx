import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, Img }) => {

    console.log(items)
    return (
        <div>
            {title && <Cover img={Img} title={title}></Cover>}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
                {
                    items.map(item => <MenuItem key={item._Id} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="text-center mb-10">
                    <button className="btn btn-outline bottom-0 border-b-4 mt-4">Order Now</button>

                </div>            </Link>
        </div>
    );
};
export default MenuCategory;