import React from 'react';
import useWindowScroll from '../../config/getWindowScroll';
import styles from '../../styles';
import Fade from 'react-reveal/Fade';
import { hero, hero2, heroMobile } from '../../assets/img';

const Hero = () => {
    const scrollPosition = useWindowScroll();

    return (
        <section className='hero'>
            <picture>
                <source media="(min-width:600px)" srcset={hero} />
                <img src={heroMobile} alt="hero" className={`duration-300 w-full
                ${scrollPosition > 0 ? 'grayscale-[0.5] blur-[1px]' : 'grayscale-0 blur-0'}`} />
            </picture>

            {
                scrollPosition > 0 ?
                    <Fade top>
                        <div className={`${styles.paddingX} w-full absolute sm:top-[300px] top-[230px]`}>
                            <div className={`w-full flex md:flex-row flex-col-reverse bg-secondary rounded-xl hero-card`}>
                                <div className={`${styles.paddingX} ${styles.paddingY} flex-1 font-poppins`}>
                                    <h1 className='font-bold text-primary sm:text-6xl text-4xl sm:text-left text-center'>Welcome To Our <br /> <span className='text-third'>Fun Page !</span></h1>
                                    <p className='leading-6 sm:pt-4 pt-2 text-dimPrimary2 sm:text-left text-center text-sm sm:text-[16px]'>Hi! So This is Our Website Class. Hope You guys Enjoy!</p>
                                </div>
                                <div className='sm:flex-1'>
                                    <img src={hero2} alt="" className='md:rounded-e-xl' />
                                </div>
                            </div>
                        </div>
                    </Fade> : null
            }

        </section>
    )
}



export default Hero;