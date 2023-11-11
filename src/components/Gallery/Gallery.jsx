import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Gallery.css';
import styles from '../../styles';

// import required modules
import { EffectCards } from 'swiper/modules';

// Data
import { dataGalery } from '../../assets/img/gallery';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='relative'>
            <div className={`${styles.paddingY} text-center`}>
                <h1 className={`font-poppins font-bold text-secondary sm:text-4xl text-3xl pb-10 relative z-[1] text-center d`} data-aos="fade-left">Random Gallery</h1>
            </div>

            <div className='rounded-full w-[350px] h-[350px] absolute top-0 left-[50%] shadow-walikelas' />
            <div className='rounded-full w-[400px] h-[400px] absolute sm:bottom-12 -bottom-4 right-[50%] shadow-walikelas' />
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="swiper-container-gallery relative z-[1]"
            >
                {
                    dataGalery.map(foto => {
                        return <SwiperSlide>
                            <img src={foto} alt="Gallery" />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    );
}

export default Gallery