import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-12 background-gradient  bg-slate-50/5 py-6 shadow-xl rounded-b-lg'>
      <ul className='flex justify-between items-center'>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-black tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>Home</span>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-black tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>About</span>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-black tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>Projects</span>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-black tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>Contact</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar