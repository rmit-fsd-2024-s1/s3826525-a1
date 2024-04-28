import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide>
          {' '}
          <div className='h-full min-h-[500px] w-full flex items-center'>
            {' '}
            <div
              className='w-[70%] flex flex-col items-center justify-center text-start h-full min-h-[500px] bg-cover bg-center bg-norepeat'
              style={{
                backgroundImage: `url('https://www.freepnglogos.com/uploads/fruits-png/ways-for-kids-eat-their-fruits-and-vegetables-13.png')`,
              }}
            >
          <h1 className='text-[64px] font-bold w-[80%] text-red-700'>Special Deal</h1>
          <h1 className='text-[64px] font-bold w-[80%] text-red-700'>20% OFF</h1>
            </div>
            <div className='bg-[#efebeb] flex flex-col items-center justify-center text-start  h-full min-h-[500px] w-[30%]'>
              <h1 className='text-[42px] font-semibold w-[80%]'>
                Free Home Delivery
              </h1>{' '}
              <p className='w-[80%]'>
                New Minimum starting from $49 Minimum varies on your area please
                see shipping page for details
              </p>{' '}
            </div>{' '}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='h-full min-h-[500px] w-full flex items-center'>
            {' '}
            <div
              className='w-[70%] flex flex-col items-center justify-center text-start h-full min-h-[500px] bg-cover bg-center bg-norepeat'
              style={{
                backgroundImage: `url('https://www.pikpng.com/pngl/b/47-474965_vegetable-png-image-background-transparent-background-vegetables-png.png')`,
              }}
            >
          <h1 className='text-[64px] font-bold w-[80%] text-red-700'>Special Deal</h1>
          <h1 className='text-[64px] font-bold w-[80%] text-red-700'>20% OFF</h1>
            </div>
            <div className='bg-[#efebeb] flex flex-col items-center justify-center text-start  h-full min-h-[500px] w-[30%]'>
              <h1 className='text-[42px] font-semibold w-[80%]'>
                Free Home Delivery
              </h1>{' '}
              <p className='w-[80%]'>
                New Minimum starting from $49 Minimum varies on your area please
                see shipping page for details
              </p>{' '}
            </div>{' '}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className='h-full min-h-[500px] w-full flex items-center'>
            {' '}
            <div
              className='w-[70%] flex  flex-col items-center justify-center text-start h-full min-h-[500px] bg-cover bg-center bg-norepeat'
              style={{
                backgroundImage: `url('https://www.freepnglogos.com/uploads/vegetables-png/fruit-and-vegetables-basket-png-20.png')`,
              }}
            >
          <h1 className='text-[64px] font-bold w-[80%] text-red-700'>Special Deal</h1>
          <h1 className='text-[64px] font-bold w-[80%] text-red-700'>20% OFF</h1>
            </div>
            <div className='bg-[#efebeb] flex flex-col items-center justify-center  text-start h-full min-h-[500px] w-[30%]'>
              <h1 className='text-[42px] font-semibold w-[80%]'>
                Free Home Delivery
              </h1>{' '}
              <p className='w-[80%]'>
                New Minimum starting from $49 Minimum varies on your area please
                see shipping page for details
              </p>{' '}
            </div>{' '}
          </div>
        </SwiperSlide>
        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
