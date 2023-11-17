
const FoodCard = ({ item }) => {
    console.log(item)
    const { category, image, name, price, recipe } = item

    const handleAddToCart = food => {
        console.log(food)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-[0] mt-8 mr-10 px-4 bg-slate-900  text-white">{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className='btn btn-outline border-orange-400 border-0 border-b-4'>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;