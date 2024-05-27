import React from 'react'

const About = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("./imgabout.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            className=' px-8 md:px-16 lg:px-32 py-12 text-white flex flex-col gap-8'>
            <h1 className=' text-3xl font-bold text-center'>About Us</h1>
            <div className=' flex flex-col lg:flex-row'>
                <div className=' lg:w-[50%] p-6 md:h-[600px]'>
                    <img className=' rounded-3xl object-cover h-[100%]' src="../lake.png" alt="image" />
                </div>
                <div className=' lg:w-[50%] p-4 flex justify-center items-center'>
                    <div className=' rounded-2xl bg-[#343333af] p-8 flex flex-col gap-6'>
                        <h1 className=' text-2xl font-bold'>Get to know us</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit voluptate in doloribus maiores nisi. Assumenda aspernatur expedita possimus quasi quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis.
                        </p> 
                        <div>
                            <button className=' text font-bold uppercase px-6 py-2 bg-cyan-400 rounded-3xl'>Read more</button>
                        </div>
                        <div className=' flex gap-10'>
                            <div>
                                <h1 className='text-xl font-bold'>500</h1>
                                <p className=' font-light  text-base'>Hours</p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>10</h1>
                                <p className=' font-light  text-base'>Years</p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>1500</h1>
                                <p className=' font-light  text-base'>Members</p>
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>550</h1>
                                <p className=' font-light  text-base'>Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
