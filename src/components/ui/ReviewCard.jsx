import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='flex flex-col sm:flex-row bg-gray-600 text-white'>
      <div className='sm:w-[50%]'>
        <img className=' object-cover h-[100%] w-[100%] object-left-top' src={props.image} alt="image" />
      </div>
      <div className=' flex flex-col gap-4 sm:w-[50%] p-4'>
        <h1 className=' text-4xl font-bold'>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ReviewCard
