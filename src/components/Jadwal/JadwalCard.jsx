import React from 'react'

const JadwalCard = (props) => {
    return (
        <div className='bg-white rounded-xl box-shadow-jadwal my-4'>
            <div className='border-jadwal'>
                <p className='text-center text-3xl font-bold text-white w-full bg-primary rounded-t-xl py-2'>{props.data.hari}</p>
            </div>
            <div className='sm:w-[350px] px-7 py-4 sm:py-4 flex justify-center'>
                <ul className='text-primary text-xl font-medium list-disc'>
                {
                    props.data.pelajaran.map((pelajaran, i) => (
                        <li>{pelajaran}</li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default JadwalCard