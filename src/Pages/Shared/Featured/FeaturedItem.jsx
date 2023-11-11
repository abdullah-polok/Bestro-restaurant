import feature from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './Featured.css'


const FeaturedItem = () => {
    return (
        <div className='featured-item p-8 my-20 bg-fixed'>
            <SectionTitle subheading={"Check it out"} heading={"Featured Item"}></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-30 bg-slate-600 bg-opacity-50'>
                <div>
                    <img src={feature} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio laborum autem quis expedita quos sit?</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;