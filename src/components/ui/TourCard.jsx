import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";

const TourCard = (props) => {
    return (
        <div 
        style={{
            backgroundImage: 'url("./tour.jpg")',
            backgroundSize: 'cover',
            objectPosition: 'center',
            height: '100%',
            width: '100'
        }}
        className=' rounded-3xl'>
            <div className=' h-[400px] '></div>
            <div className=' flex justify-between bottom-0  left-0 right-0 p-2 bg-[#c4c4c4a7]'>
                <div>
                    <p>{props.title}</p>
                    <p>{props.price}</p>
                </div>
                <div className=' flex justify-center items-center'>
                    <CgArrowLongRight className=' scale-150' />
                </div>
            </div>
        </div>
    )
}

export default TourCard
