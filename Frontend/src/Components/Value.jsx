import React, { useState } from 'react';
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../src/utils/accordion.jsx'

const Value = () => {
  return (
    <section className='flex justify-center mt-9'>
        <div className='flex w-3/4 justify-center'>

            <div className='flex justify-center w-1/2 pb-10'>
                <div className='w-9/12 h-full rounded-t-full overflow-hidden border-8 border-gray-200'>
                    <img src="./value.png" className="w-full h-full object-cover" alt="" />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <span  className="text-orange-400 text-2xl font-semibold">Our Value</span>
                <span className="text-blue-700 text-3xl font-semibold">The value we give to you</span>
                <span>
                    We are always ready to help by providing best services for you
                    <br />
                    We believe a good place to live can make your life better
                </span>


                <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='w-[500px] mt-5'>
                    {
                        data.map((item, i)=>{
                            const [className, setClassName] = useState(null);
                            return (
                                <AccordionItem key={i} uuid={i} className ={`mb-5 border-2 rounded-xl ${className}`}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flex text-blue-700 text-xl font-bold justify-between p-5'>

                                            <AccordionItemState>
                                                {({expanded}) => expanded ? setClassName("shadow-lg shadow-blue-200") : setClassName("collapsed")}
                                            </AccordionItemState>

                                            <div className='bg-blue-100 rounded-lg p-1'>{item.icon}</div>
                                            <span>
                                                {item.heading}
                                            </span>
                                            <div className='bg-blue-100 rounded-lg p-1'>
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel className='p-5 text-sm'>
                                        {item.detail}
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
            </div>

        </div>
    </section>
  )
}

export default Value
