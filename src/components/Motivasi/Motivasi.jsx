import React from 'react'
import { quotes } from '../../assets/img'
import ReactTyped from "react-typed";

const Motivasi = () => {
    return (
        <section>
            <div className='flex flex-col items-center'>
                <img src={quotes} alt="Quotes" className='w-16 filter-quotes' />
                <br />
                <h1 className='font-medium sm:text-xl text-lg sm:w-[380px] w-[360px] text-center'>
                    <ReactTyped strings={['"Dilarang tapi boleh, boleh tapi dilarang. Iku jawaban e wong Ekonomi."']} typeSpeed={100} loop />
                    </h1>
                <br />
                <h2 className='text-primary font-bold'>Bapak Tafrikin, S.Pd</h2>
                <h3 className='text-xs'>Bapak Ekonomi Dunia</h3>
            </div>
        </section>
    )
}

export default Motivasi