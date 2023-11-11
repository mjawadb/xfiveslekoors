import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { blur } from '../../assets/img/hot-news';

const NewsSlide = ({ data, index }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='relative'>
            <img src={data.gambar}/>
            <div className='opacity-[0.8] w-[full]'>
                <img src={blur} className='absolute top-[-10px] object-contain' data-aos="fade-right" />
            </div>
            <div className='absolute top-0 text-start text-white sm:w-[500px] w-[200px] h-full flex flex-col justify-center pl-6' data-aos="fade-right">
                <h1 className='sm:text-[120px] sm:leading-[110px] text-4xl font-bold text-shadow-news '>{data.judul}</h1>
                {/* {
                    (index == 1 || index == 2) ?
                    <h4 className='opacity-[0.8] text-right sm:text-sm text-[9px] sm:pt-4 pt-2'>{data.desc}</h4> :
                    <h4 className='opacity-[0.8] text-right sm:text-sm text-[9px] pt-2'>{data.desc}</h4>
                } */}
                <h4 className='opacity-[0.7] text-right sm:text-sm text-[9px] sm:pt-4 pt-2'>{data.desc}</h4>

            </div>
        </section>
    )
}

export default NewsSlide