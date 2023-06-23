import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full px-4 lg:px-12 background-gradient  bg-slate-900 py-6 shadow-xl border-b-2 border-b-slate-900'>
      <ul className='flex justify-between items-center'>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <a  href='#home' className='font-semibold text-white lg:tracking-[5px] uppercase text-[12px] md:text-base xl:text-xl'>Home</a>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <a  href='#reservations' className='font-semibold text-white lg:tracking-[5px] uppercase text-[12px] md:text-base xl:text-xl'>RESERVATIONS</a>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <a  href='#menu' className='font-semibold text-white lg:tracking-[5px] uppercase text-[12px] md:text-base xl:text-xl'>menu</a>
        </li>
        <li className='hover:translate-y-1 hover:translate-x-2 cursor-pointer duration-500'>
          <a  href='#contact' className='font-semibold text-white lg:tracking-[5px] uppercase text-[12px] md:text-base xl:text-xl'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar