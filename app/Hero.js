'use client'
import React, { useState } from 'react'
import Movies from './Movies'

const Hero = () => {
    const [bannerimage,setbannerimage]=useState("https://wallpapers.com/images/high/avengers-infinity-war-collage-artwork-desktop-thqv4j8n5ad2oit2.webp")
  return (
    <div>
        <div className=' absolute z-[-1] m-auto'>
            <img src={bannerimage} alt="Hero" className='h-screen object-cover w-screen' />
        </div>
        <div className='h-48 absolute w-screen z-[-1] bg-gradient-to-b from-gray-900'>

        </div>
        <div className='h-48 absolute bottom-0 w-screen z-[-1] bg-gradient-to-t from-gray-900'>

        </div>
        <div className='p-5 mt-32  absolute md:ml-16'>
        <p className='text-[50px] relative   top-2 font-bold'> The Avengers<br/> Came to Action</p>
        <div>
          <p className='text-xl mt-3'>
            The Marvel orginal Film
          </p>
        </div>
        <div>
          <button className='bg-red-600 p-2 w-40 rounded-full mt-3 text-2xl border-3 border-blue-700 hover:scale-110'>
            Play

          </button>
        </div>
        <h1 className='mt-6  text-2xl font-bold'>
            New Relaese Movies
        </h1>

        <div className='mt-12'>
    <Movies/>
    </div>
   
        </div>
        
        

    </div>
  )
}

export default Hero