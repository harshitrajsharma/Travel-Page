import React from 'react'
import TourCard from './ui/TourCard'

const WhyUs = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("./whyimg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            className=' px-8 md:px-16 lg:px-32 py-12 text-white flex flex-col gap-8'>
            <h1 className=' text-3xl font-bold text-center'>Why Us</h1>
            <div className=' flex flex-col-reverse md:flex-row'>
                <div className=' md:w-[50%] p-4 flex justify-center items-center'>
                    <div className=' rounded-2xl bg-[#343333af] p-8 flex flex-col gap-6'>
                        <h1 className=' text-2xl font-bold'>Hobbiton</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit voluptate in doloribus maiores nisi. Assumenda aspernatur expedita possimus quasi quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.
                        </p>
                        <div>
                            <button className=' text font-bold uppercase px-6 py-2 bg-cyan-400 rounded-3xl'>Read more</button>
                        </div>
                    </div>

                </div>
                <div className=' md:w-[50%] p-6 md:h-[600px]'>
                    <img className=' rounded-3xl object-cover h-[100%]' src="../whyimg2.jpg" alt="image" />
                </div>
            </div>
            <h1 className=' text-3xl font-bold text-start'>Popular Tours</h1>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                <TourCard title="Hook falls" image="./tour.jpg" price="3200 $" />
                <TourCard title="Hook falls" image="./tour.jpg" price="3200 $" />
                <TourCard title="Hook falls" image="./tour.jpg" price="3200 $" />
                <TourCard title="Hook falls" image="./tour.jpg" price="3200 $" />
            </div>
        </div>
    )
}

export default WhyUs
