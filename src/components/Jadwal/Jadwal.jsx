import React, {useEffect} from 'react'
import JadwalCard from './JadwalCard'
import { JadwalKelas } from '../../config/constant/JadwalKelas/JadwalKelas'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Jadwal = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section className='relative'>
      <div className='pb-10 flex justify-center' data-aos="fade-right">
        <h1 className='font-poppins font-bold text-primary sm:text-4xl text-3xl scroll-mt-[150px]' id='jadwal'> <span className='text-third underline'>Jadwal</span> Bolo</h1>
      </div>
      <div className='flex sm:flex-row sm:w-full w-[300px] flex-col flex-wrap sm:justify-around m-auto relative z-[1]'>
        {
          JadwalKelas.map((jadwal, i) => (
            <JadwalCard data={jadwal} />
          ))
        }
      </div>

      {/* Shading */}
      <div className='w-64 h-64 bg-primary opacity-[0.15] blur-[10px] absolute rounded-full top-10 -left-6' />
      <div className='w-64 h-64 bg-primary opacity-[0.15] blur-[10px] absolute rounded-full bottom-10 -right-6' />
    </section>
  )
}

export default Jadwal