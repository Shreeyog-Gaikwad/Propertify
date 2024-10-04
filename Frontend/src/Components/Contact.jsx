import React from 'react'
import { MdCall } from "react-icons/md"
import { BsFillChatDotsFill } from "react-icons/bs"
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='flex justify-center my-16'>
      <div className='flex justify-center w-3/4'>
        <div className='flex flex-col justify-center gap-2'>
          <span className="text-orange-400 text-2xl font-semibold">Our Contacts</span>
          <span className="text-blue-700 text-3xl font-semibold">Easy to Contact Us</span>
          <span>
            We are always ready to help by providing best services for you. 
            <br />
            We believe a good place to live can make your life better.
          </span>

          <div className='flex flex-col gap-6 mt-6'>
            <div className='flex gap-6'>
              <div className='border-2 p-4 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                <div className='flex'>
                  <div className='bg-blue-100 p-1 text-center rounded-lg px-2'>
                    <MdCall color='blue' size={35} />
                  </div>
                  <div className='flex flex-col px-4'>
                    <span>Call</span>
                    <span>+91 9527264942</span>
                  </div>
                </div>
                <div className='bg-blue-100 text-center text-blue-600 font-semibold mt-2 rounded-lg hover:text-white hover:bg-blue-600'>Call Now</div>
              </div>

              <div className='border-2 p-4 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                <div className='flex'>
                  <div className='bg-blue-100 p-1 text-center rounded-lg px-2'>
                    <BsFillChatDotsFill color='blue' size={35} />
                  </div>
                  <div className='flex flex-col px-4'>
                    <span>Chat</span>
                    <span>+91 9527264942</span>
                  </div>
                </div>
                <div className='bg-blue-100 text-center text-blue-600 font-semibold mt-2 rounded-lg hover:text-white  hover:bg-blue-600'>Call Now</div>
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='border-2 p-4 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                <div className='flex'>
                  <div className='bg-blue-100 p-1 text-center rounded-lg  px-2'>
                    <FaVideo  color='blue' size={35} />
                  </div>
                  <div className='flex flex-col px-4'>
                    <span>Video Call</span>
                    <span>+91 9527264942</span>
                  </div>
                </div>
                <div className='bg-blue-100 text-center text-blue-600 font-semibold mt-2 rounded-lg hover:text-white  hover:bg-blue-600'>Call Now</div>
              </div>

              <div className='border-2 p-4 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out'>
                <div className='flex'>
                  <div className='bg-blue-100 p-1 text-center rounded-lg px-2'>
                    <HiChatBubbleBottomCenter color='blue' size={35} />
                  </div>
                  <div className='flex flex-col px-4'>
                    <span>Message</span>
                    <span>+91 9527264942</span>
                  </div>
                </div>
                <div className='bg-blue-100 text-center text-blue-600 font-semibold mt-2 rounded-lg hover:text-white  hover:bg-blue-600'>Call Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center w-1/2'>
          <div className='w-9/12 h-full rounded-t-full overflow-hidden border-8 border-gray-200'>
            <img src="./contact.jpg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
