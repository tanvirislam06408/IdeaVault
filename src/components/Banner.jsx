'use client'


// Import Swiper React components


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';

const Banner = () => {
    return (
        <div className='px-4 md:px-0'>
      <Swiper
        pagination={{
          dynamicBullets: true,
          
        }}
        
         autoplay={{
        delay: 3000,
        disableOnInteraction: false,
    }}
    loop={true}
        modules={[Pagination,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide1/></SwiperSlide>
        <SwiperSlide><Slide2/></SwiperSlide>
        <SwiperSlide><Slide3/></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;