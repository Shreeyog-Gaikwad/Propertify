import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../src/utils/slider.json";
import { HiArrowSmallRight, HiArrowSmallLeft } from "react-icons/hi2";

const Residencies = () => {
  return (
    <section className="py-11">
      <div className='flex flex-col ml-56'>
          <div className="text-orange-400 text-2xl font-semibold">Best Choices</div>
          <div className="text-blue-700 text-3xl font-semibold">Popular Residencies</div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 overflow-visible relative">
        
          <Swiper
            spaceBetween={30} 
            slidesPerView={3}
          >
            <SliderButtons/> 
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flex-col gap-4 w-full mt-6 p-6 rounded-2xl hover:bg-gradient-to-b from-gray-50 to-blue-100 ">
                  <img src={card.image} alt="home" />
                  <div className='py-3 text-xl'>
                    <span className="text-orange-400">$ </span><span>{card.price}</span>
                  </div>
                  <div className="text-blue-700 text-2xl font-semibold">{card.name}</div>
                  <div className="text-gray-500">{card.detail}</div>
                </div>
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Residencies; 

const SliderButtons = () =>{
  const swiper = useSwiper();
  return (
    <div className="absolute inset-y-0 mb-[420px] flex items-center justify-end gap-4 w-full px-6 pointer-events-none z-10">
      <button onClick={()=> swiper.slidePrev()} className="bg-gray-200 text-black px-3 py-1 rounded pointer-events-auto flex gap-1" ><HiArrowSmallLeft className='mt-1'/> Prev</button>
      <button onClick={()=> swiper.slideNext()} className="bg-gray-200 text-black px-3 py-1 rounded pointer-events-auto flex gap-1" >Next <HiArrowSmallRight className='mt-1'/></button>
    </div>
  );
};