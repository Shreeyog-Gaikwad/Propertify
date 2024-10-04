import React from 'react'

const Footer = () => {
  return (
    <section className='flex justify-center my-12'>
      <div className='flex w-3/4 justify-between'>
        <div className='w-[50%] flex flex-col gap-4'>
          <div className='flex flex-row gap-1'>
            <img src="./logo-black.png" alt="" className='w-10 h-10' />
            <span className='text-3xl pt-2 font-medium'>Propertify</span>
          </div>
            <span className='text-gray-500'>Our vision is to make all people <br /> the best place to live for them</span>
        </div>
        <div className='flex flex-col'>
            <div className='text-3xl pt-2 font-medium'>Information</div>
            <span className='text-gray-500'>145 New York, FL 4571, USA</span>
            
            <div className='flex gap-4 font-medium pt-4'>
              <span>Property</span>
              <span>Services</span>
              <span>Product</span>
              <span>About Us</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
