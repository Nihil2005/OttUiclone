import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center'>
            <Image className='p-6' src='/logo.svg' height={100} width={120}/>
            <ul className='flex flex-row gap-7 text-2xl'>
                <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 rounded-full hover:text-white-300'>
                    Movies
                </li>
                <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 rounded-full hover:text-white-300'>
                    Series
                </li>
                <li className='hover:scale-110 cursor-pointer transition-all hover:bg-red-700 px-3 py-1 rounded-full hover:text-white-300'>
                    Kids
                </li>
            </ul>
        </div>
        <div>
            <img className='h-12 w-12 mt-2  rounded-full invisible md:visible lg:visible' src='https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1718521159~exp=1718524759~hmac=a2a258562ec9915193bd75fd4b14d45823f3d3f247f068c517e082843ab50809&w=740' />
        </div>

    </div>
  )
}

export default Header