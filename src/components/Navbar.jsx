import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-12 background-gradient  bg-slate-900 py-6 shadow-xl border-b-2 border-b-slate-900'>
      <ul className='flex justify-between items-center'>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-white tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>Home</span>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-white tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>About</span>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-white tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>Projects</span>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <span className='font-semibold text-white tracking-[5px] uppercase text-sm md:text-base xl:text-xl'>Contact</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar