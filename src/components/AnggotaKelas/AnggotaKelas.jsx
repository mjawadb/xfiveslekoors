import React, { useEffect } from 'react'
import styles from '../../styles'
import CardSlides from './CardSlides'
import Fade from 'react-reveal/Fade';
import useWindowScroll from '../../config/getWindowScroll';
import { Reveal } from 'react-reveal';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnggotaKelas = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section>
      <div className={`flex flex-col items-center sm:pt-0 pt-[-100px] sm:py-[0] ${styles.paddingY}`}>
        <div className='pb-10' data-aos="fade-right">
          <h1 className='font-poppins font-bold text-primary sm:text-4xl text-3xl scroll-mt-[150px]' id='anggota-kelas'>This is Our <span className='text-third underline'>Members</span></h1>
        </div>

        <div className={`w-full h-[300px] ${styles.paddingX} `}>
          <Reveal>
            <Fade top>
              <CardSlides />
            </Fade>
          </Reveal>
        </div>

        <div>

        </div>
      </div>
    </section>
  )
}

export default AnggotaKelas