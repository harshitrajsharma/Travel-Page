import React from 'react'
import Navbar from './Navbar'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import LocationCard from './ui/LocationCard';

const Hero = () => {
    return (
        <div style={{ backgroundImage: 'url("./herobg.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
         }} className=' text-white lg:h-[850px] flex flex-col'>
            <Navbar />
            <div className=' flex flex-col-reverse md:flex-row px-8 md:px-16 lg:px-32 py-12 h-[100%] gap-12'>
                <div className=' flex md:flex-col  gap-12 justify-center items-center w-full py-6 md:w-32 h-[100%]'>
                    <a className=' scale-150' href="#"><FaInstagram /></a>
                    <a className=' scale-150' href="#"><FaFacebook /></a>
                    <a className=' scale-150' href="#"><FaTwitter /></a>
                </div>
                <div className=' flex flex-col w-full justify-center items-center gap-12'>
                    <div className=' w-full'>
                        <h1 className=' text-3xl md:text-6xl lg:text-[12rem] font-bold uppercase tracking-widest'>Travel</h1>
                        <p className=' text-xl py-6 uppercase tracking-widest '>plan your experience</p>
                        <hr />
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-3  w-full gap-12'>
                        <LocationCard  title="New Zealand"/>
                        <LocationCard  title="Indonesia"/>
                        <LocationCard  title="Argentina"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
