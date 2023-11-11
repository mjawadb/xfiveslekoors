import React, { useEffect } from 'react'
import styles from '../../styles'
import { momentData } from '../../config/constant/MemorableMoment/MemorableMoment'
import MomentCard from './MomentCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MemorableMoment = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <section className='flex flex-col items-center'>
            <div className={`${styles.paddingY}`}>
                <h1 className='font-poppins font-bold text-primary sm:text-4xl text-3xl scroll-mt-[150px]' data-aos="fade-right" id='memorable-moment'> <span className='text-third underline'>Memorable</span> Moment</h1>
            </div>

            <div>
                <div className='flex justify-between sm:justify-around flex-wrap w-[410px] sm:w-full bg-dimPrimary1 pb-4'>
                    {
                        momentData.map((moment, i) => {
                            if (i == 0) {
                                return <MomentCard data={moment} w='w-[200px] sm:w-[610px]' />
                            }
                            if (i == momentData.length - 1) {
                                return <MomentCard data={moment} w='w-[200px] sm:w-[600px] xl:-mt-[230px]' />
                            }
                            else {
                                return <MomentCard data={moment} w='w-[200px] sm:w-[300px] sm:h-[320px]' />
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MemorableMoment