import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MomentCard = (props) => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className={`${props.w} bg-white box-shadow-news hover:translate-x-[-4px] hover:translate-y-[-4px] duration-200 rounded-lg pb-4 mt-3 text-center`} data-aos="fade-up">
            <img src={props.data.gambar} alt="Gambar Berita" className='w-full rounded-t-lg' />
            <div className='px-6'>
                <h1 className='p-4 pb-0 font-bold text-xl text-dimBlack'>{props.data.judul}</h1>
                <h4 className='opacity-[0.6] pb-4'>{props.data.tanggal}</h4>
                <h1 className='opacity-[0.7] text-sm font-semibold'>{props.data.desc}</h1>
            </div>
        </div>
    )
}

export default MomentCard