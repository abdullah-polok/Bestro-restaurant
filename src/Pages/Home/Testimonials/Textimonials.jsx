
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Textimonials = () => {
    const [textimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
            })
    }, [])
    return (
        <section>
            <SectionTitle subheading={'What Our Client Say'} heading={'Testimonials'}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    textimonials.map(texti => <SwiperSlide key={texti._id}>
                        <div className='mx-24 my-16 text-center'>
                            <div className='flex justify-center mb-2'>
                                <Rating style={{ maxWidth: 180 }}
                                    value={texti.rating}
                                    readOnly >
                                </Rating>
                            </div>
                            <p>{texti.details}</p>
                            <h2 className='text-2xl text-orange-400'>{texti.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Textimonials;
