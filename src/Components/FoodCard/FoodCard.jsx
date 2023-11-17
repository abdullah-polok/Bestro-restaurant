import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";
const FoodCard = ({ item }) => {
    ///custom hook
    const { user } = useAuth()
    // console.log(user)
    const { category, image, name, price, recipe, _id } = item
    const navigate = useNavigate()
    const location = useLocation()

    ///used axiossecure for hide the the base link
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = food => {
        ///Enforce user to login before add to the cart
        ///check user login or not and if login cart can be added
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            ///send data to the database useing axios
            // axios.post('http://localhost:5000/carts', cartItem)
            //     .then(res => {
            //         console.log(res.data)
            //         if (res.data.insertedId) {
            //             Swal.fire({
            //                 position: "top-end",
            //                 icon: "success",
            //                 title: `${name} added to your cart`,
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             });
            //         }
            //     })





            ///send data to the database useing axiosSecure
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // refetch the cart
                        refetch();
                    }
                })

            // fetch(`http://localhost:5000/cart`, {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(food)
            // })
        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    ///send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-[0] mt-8 mr-10 px-4 bg-slate-900  text-white">{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className='btn btn-outline border-orange-400 border-0 border-b-4'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;