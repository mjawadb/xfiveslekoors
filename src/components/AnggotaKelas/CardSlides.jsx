import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './CardSlides.css';
import { Pagination } from 'swiper/modules';

import { dataKelas } from '../../config/constant/DataKelas/dataKelas';

export default function CardSlides() {
  return (
    <div>
      <Swiper
        slidesPerView='auto'
        spaceBetween={35}
        grabCursor={true}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        modules={[Pagination]}
        className='swiper-container'
        style={{
          "--swiper-pagination-color": "#6C827A",
          "--swiper-pagination-bullet-inactive-color": "#767395",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "5.5px"
        }}
      >
        {
          dataKelas.map((anggota, i) => (
            <div>
              <SwiperSlide className='pb-4'>
                <img src={anggota.absen} alt={`absen-${i}`} className='w-[100%] h-[220px]' />
                <p className='text-dimWhite text-xl '>{anggota.nama}</p>
                <p className='text-dimWhite text-sm pt-1 opacity-[0.5]'>{anggota.namaLengkap}</p>
              </SwiperSlide>
            </div>

          ))
        }
      <div className="swiper-custom-pagination text-center mt-2 mb-6" />
      </Swiper>
    </div>
  );
}
