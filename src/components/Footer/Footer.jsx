import React from 'react';
import styles from '../../styles';
import { logo } from '../../assets/img/footer';
import { socialMedia } from '../../config/constant/Footer/Footer';

const Footer = () => (
  <section className={` ${styles.paddingY} flex-col ${styles.paddingX}`}>
    <div className='flex sm:flex-row flex-col sm:justify-start justify-center items-center mb-8 sm:-mb-14 sm:-mt-14 mt-0'>
      <img src={logo} alt="logo" className='sm:w-[300px] w-[200px] -mt-20' />
      <p className='-mt-6 sm:text-4xl text-2xl font-poppins font-normal text-dimWhite text-center'>Awali hari mu dengan senyuman ~</p>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-[18px} leading-[27px] text-white'>2023 Muhammad Jawad. All Rights Reserved.</p>

      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <a href={social.link} target='_blank'>
            <img key={social.id} src={social.icon} alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default Footer