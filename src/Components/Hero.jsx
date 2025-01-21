import React from 'react'
import HeroCanvas from './HeroCanvas'
import { Canvas } from '@react-three/fiber'

function Hero() {
  return (
    <div className='h-[80vh] poppins-semibold'>

      <div className='absolute h-[80vh] w-full z-0 flex items-center justify-center'>

      <div className='flex flex-col  pb-72 gap-12'>
        <div className='text-8xl font-bold'>
            Pencils At <span className='text-[#75e182]'>Bulk Price</span>
        </div>
        <div className='flex text-2xl gap-3'>
        <button 
        className='py-1 px-5 border-2 border-pink-400 rounded-2xl 
                   hover:bg-pink-400 hover:text-white transition-colors 
                   cursor-pointer'>
        Buy Now
        </button>

        <button 
            className='py-1 px-5 border-2 border-pink-400 rounded-2xl 
                      hover:bg-pink-400 hover:text-white transition-colors 
                      cursor-pointer'>
            Explore Catalog
        </button>
        </div>
      </div>

      </div>
      <Canvas>
        <HeroCanvas />
      </Canvas>
    </div>
  )
}

export default Hero