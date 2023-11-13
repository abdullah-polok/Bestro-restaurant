import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, Img }) => {

    console.log(items)
    return (
        <div>
            {title && <Cover img={Img} title={"Our Menu"}></Cover>}
            <div className="grid md:grid-cols-3 gap-4 mt-12">
                {
                    items.map(item => <MenuItem key={item._Id} item={item} ></MenuItem>)
                }
            </div>
        </div>
    );
};
export default MenuCategory;