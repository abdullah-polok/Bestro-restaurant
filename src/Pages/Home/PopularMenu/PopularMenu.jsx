import { key } from "localforage";
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === "popular")
    //             setMenu(popularItems)
    //         })
    // }, [])

    ///////////
    ///taken data from custom useMenu hook
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === "popular")


    return (
        <section className="mb-12">
            <SectionTitle heading={"From our Menu"} subheading={"Popular Items"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4 mt-12">
                {
                    popularItems.map(item => <MenuItem key={item._Id} item={item} ></MenuItem>)
                }
            </div>


        </section>
    );
};

export default PopularMenu;