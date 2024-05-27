import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";

const locationCard = (props) => {
    return (
        <div className=' px-8 py-4 bg-[#343333af] text-white flex gap-6'>
            <div className=' flex justify-center items-center px-2'>
                <IoLocationOutline className='scale-[250%]' />
            </div>
            <div className=' flex flex-col gap-4'>
                <h1 className=' text-4xl'>{props.title}</h1>
                <p className=' flex gap-4 items-center'>Plan a trip <HiArrowLongRight /></p>
            </div>
        </div>
    )
}

export default locationCard
