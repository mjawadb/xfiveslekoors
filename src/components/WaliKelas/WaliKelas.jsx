import React, { useEffect } from 'react'
import { walikelas } from '../../assets/img'
import styles from '../../styles'
import './WaliKelas.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const WaliKelas = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <br />
            <br />
            <section className={`bg-primary relative ${styles.paddingX} ${styles.paddingY}`}>
                <div className={`flex flex-col ${styles.flexCenter}`}>
                    <h1 className={`font-poppins font-bold text-secondary sm:text-4xl text-3xl pb-10 relative z-[1] text-center`} id='anggota-kelas' data-aos="fade-left">And Our Daddy Dadang</h1>
                    <img src={walikelas} alt="Wali Kelas" className='sm:w-[400px] w-[350px] rounded-[12px] box-shadow-walikelas relative z-[1] mb-10' />
                    <div className='rounded-full w-[350px] h-[350px] absolute top-8 left-[50%] shadow-walikelas' />
                    <div className='rounded-full w-[400px] h-[400px] absolute sm:bottom-12 -bottom-4 right-[50%] shadow-walikelas' />
                </div>
            </section>
        </>

    )
}

export default WaliKelas