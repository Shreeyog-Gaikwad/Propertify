import React from 'react';
import { IoLocation } from "react-icons/io5";
import CountUp from "react-countup"

const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className="flex justify-between items-center py-12 w-3/4">

        <div className="text-white flex flex-col items-center justify-center w-1/2 h-full gap-12">
          <div>
            <div className='relative z-[1]'>
                <div className='w-16 h-16 bg-gradient-to-r from-[#fa7e0a] to-[#f1c8a1] rounded-full absolute right-[28%] top-[-12%] z-[-1]'></div>
                <h1 className='text-6xl font-semibold leading-[4rem]'>Discover <br /> Most Suitable <br /> Property</h1>
            </div>
          </div>
          <div className='w-[410px] text-gray-400'>
            <span>Find a variety of properties that suit you very easily</span>
            <br />
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className='flex bg-white rounded-lg py-2 px-2 justify-between align-middle w-[410px]'>
            <IoLocation color='blue' size={30} className='my-1'/>
            <input type="text" className='border-none outline-none text-black w-[250px]' />
            <button className='bg-blue-500 py-2 px-4 rounded-xl transition transform hover:bg-blue-600'>Search</button>
          </div>

          <div className='flex justify-between gap-12'>
            <div>
              <span className='text-3xl'>
                <CountUp start={8800} end={9000} duration={4} />
                <span className='text-orange-400'> +</span>
              </span>
              <br />
              <span className='text-sm text-gray-300'>Premium Products</span>
            </div>

            <div>
              <span className='text-3xl'>
                <CountUp start={1950} end={2000} duration={4} />
                <span className='text-orange-400'> +</span>
              </span>
              <br />
              <span className='text-sm text-gray-300'>Happy Customers</span>
            </div>

            <div>
              <span className='text-3xl'>
                <CountUp end={28}/>
                <span className='text-orange-400'> +</span>
              </span>
              <br />
              <span className='text-sm text-gray-300'>Award Winnings</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center w-1/2 pb-10">
          <div className="w-96 h-full rounded-t-full overflow-hidden border-8 border-gray-800">
            <img className="w-full h-full object-cover" src="./public/hero-image.png" alt="Hero" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
