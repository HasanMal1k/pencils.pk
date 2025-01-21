import { div } from 'motion/react-client'
import React, { useState } from 'react'

function Navbar() {

  const [menu, setMenu] = useState(false)


  return (
    <div className='max-w-7xl mx-auto px-10 py-10 md:px-16 xl:px-0 h-[20%]'>

        <div className='poppins-regular flex justify-between items-center'>
          <div className='text-4xl font-semibold flex justify-center items-center text-gray-800'>
              Pencils
          </div>

          <div className='flex items-center justify-center gap-2 text-lg'>
              <button className='lg:hidden' onClick={()=> {setMenu(true)}}>
                <img src="/menu.svg" alt="" className='h-6 w-6'/>
              </button>
              <a href="" className='hidden lg:flex hover:text-yellow-200 transition-all duration-300'>about</a>
              <a href="" className='hidden lg:flex hover:text-pink-500   transition-all duration-300'>products</a>
              <a href="" className='hidden lg:flex hover:text-blue-500   transition-all duration-300'>contact</a>
          </div>

        </div>

        {menu ? mobileMenu({setMenu}) : null}

    </div>
  )
}

function mobileMenu({setMenu}) {
  return (
    <div className='h-[100vh] w-[70vw] top-0 right-0 absolute bg-black z-50'>
      {/* Close button */}
      <div className='absolute top-16 right-10 cursor-pointer'>
        <img 
          src="/cross.svg" 
          alt="Close" 
          className='h-8 w-8' 
          onClick={()=>{setMenu(false)}}
        />
      </div>

      {/* Menu content */}
      <div className='flex flex-col items-center justify-center h-full w-full z-10'>
        <div className='flex flex-col text-xl gap-6 text-white'>
          <a href="#" className='text-center hover:text-yellow-200 transition-all duration-300'>
            About
          </a>
          <a href="#" className='text-center hover:text-pink-500 transition-all duration-300'>
            Products
          </a>
          <a href="#" className='text-center hover:text-blue-500 transition-all duration-300'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}


export default Navbar