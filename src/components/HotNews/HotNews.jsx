import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HotNews.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import styles from '../../styles';

import NewsSlide from './NewsSlide';
// Data 
import { News } from '../../config/constant/HotNews/HotNews';

import AOS from 'aos';
import 'aos/dist/aos.css';

const HotNews = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='scroll-mt-[150px]' id='hot-news'>
            <h1 className={`font-poppins font-bold text-secondary sm:text-4xl text-3xl pb-10 relative z-[1] text-center`} data-aos="zoom-in-up" >HOT News</h1>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper-container"
            >
                {
                    News.map((news, i) => {
                        return <SwiperSlide><NewsSlide data={news} index={i} /></SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    );
}

export default HotNews