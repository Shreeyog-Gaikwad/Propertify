import React from 'react'

const GetStarted = () => {
  return (
    <section className='flex justify-center my-9'>
      <div className='flex w-3/4 justify-center bg-blue-600 rounded-lg'>
      <div className='flex flex-col py-12 gap-7 justify-center items-center'>
        <span className='text-white text-3xl text-center font-semibold'>Get Started with Propertify</span>
        <span className='text-center text-gray-300'>Subscribe and find super attractive price quotes from us <br />Find your residence soon</span>
        <button className='text-white bg-blue-500 font-semibold border-2 py-2 w-32 text-center rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out'>Get Started</button>
      </div>
      </div>
    </section>
  )
}

export default GetStarted
