import React from 'react'
import ReviewCard from './ui/ReviewCard'

const Reviews = () => {
  return (
    <div
    style={{
        backgroundImage: 'url("./whyimg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }}
    className=' px-8 md:px-16 lg:px-32 py-12 text-white flex flex-col gap-8'
    >
      <h1 className=' text-3xl font-bold text-center uppercase'>Reviews</h1>
      <div className=' grid lg:grid-cols-2 gap-4'>
        <ReviewCard image="./newimg.jpg" title="Isabella" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ipsa!" />
        <ReviewCard image="./newimg.jpg" title="Isabella" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ipsa!" />
        <ReviewCard image="./newimg.jpg" title="Isabella" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ipsa!" />
        <ReviewCard image="./newimg.jpg" title="Isabella" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ipsa!" />
        
      </div>
      
      <div className=' flex flex-col md:flex-row gap-12'>
        <div className=' md:w-[50%]'>
            <h1 className=' text-3xl md:text-4xl lg:text-6xl uppercase'>Send us a request to book a cool trip</h1>
        </div>
        <div className=' md:w-[50%]'>
            <form action="" className='flex flex-col gap-4'>
                <input className=' p-4 bg-transparent border-b-2 border-white text-white' type="text" name="name" id="name" placeholder='Name' />
                <input className=' p-4 bg-transparent border-b-2 border-white text-white' type="email" name="email" id="email" placeholder='Email' />
                <input className=' p-4 bg-transparent border-b-2 border-white text-white' type="text" name="message" id="message" placeholder='Message' />
                <div><input type="submit" value="Send" className='uppercase px-4  py-2 bg-cyan-400 rounded-full' /></div>
            </form>
        </div>
      </div>

    </div>
  )
}

export default Reviews
