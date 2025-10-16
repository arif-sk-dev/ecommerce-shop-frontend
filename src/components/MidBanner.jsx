import React from 'react'
import banner from '../assets/banner1.jpg'

const MidBanner = () => {
  return (
    <div className='bg-gray-100 mt-20'>
      <div className='relative max-w-7xl mx-auto bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px]' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment:'fixed'}}>
        <div className='absolute inset-0 bg-black/60 bg-opacity-30'>
          <div className='text-center text-white px-4 py-10'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mt-4 md:mt-10 lg:mt-13'>Next-Gen Fashion & Electronics</h1>
            <p className='text-lg md:text-xl mt-10 mb-8'>Discover the latest text innovation with unbeatable prices & Free Shipping on Selected Product!</p>
            <button className='bg-red-500 text-white font-semibold px-3 py-2 rounded-lg transition duration-300 hover:bg-red-700 cursor-pointer'>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner