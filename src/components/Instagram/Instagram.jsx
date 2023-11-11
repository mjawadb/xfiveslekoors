import React, { useEffect } from 'react'
import { h1Instagram } from '../../assets/img'
import Button from '../Button/Button'
import Fade from 'react-reveal/Fade'
import { handPointing } from '../../assets/img'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Instagram = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <section className='shadow-inset sm:pt-0 pt-[100px]'>
      <Fade top>
        <div>
          <img src={h1Instagram} alt="Our Instagram" />
        </div>
      </Fade>

      <div className='flex justify-center relative'>
        <Button styles='sm:mb-[150px] mb-[250px] mt-6 relative z-[1]' href="https://www.instagram.com/xfiveslekoors/">Continue To Instagram</Button>
        <img src={handPointing} alt="Hand Pointing" className='absolute sm:top-5 top-10 left-[50%] sm:w-64 w-32' data-aos="zoom-in-up"/>
      </div>
    </section>
  )
}

export default Instagram