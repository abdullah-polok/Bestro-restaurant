import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './Category.css'
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={'Order online'}
                subheading={'From 11.00am to 10.00pm'}></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24 mt-5"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-4xl text-center text-white -mt-20'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /> <h3 className='text-4xl text-center text-white -mt-20'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /> <h3 className='text-4xl text-center text-white -mt-20'>Desert</h3></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /> <h3 className='text-4xl text-center text-white -mt-20'>Cakes</h3></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /> <h3 className='text-4xl text-center text-white -mt-20'>Salads</h3></SwiperSlide>
            </Swiper>
        </section >
    );
};

export default Category;