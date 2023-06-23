import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-black/90'>
    <div className="w-full py-8 px-8 space-y-7 lg:space-y-0 md:px-6 lg:px-32 bg-black/80 grid grid-cols-2 lg:grid-cols-4 gap-8">

    {/* About Us */}
    <div className="space-y-6">
        <h1 className="text-white font-semibold uppercase text-xl font-roboto">About Us</h1>
        <div className="img w-[80%] h-[5rem]">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="working" className='w-full h-full object-cover' />
        </div>
        <p className="text-white text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis quam, sodales in ante sagittis, varius efficitur mauris</p>
    </div>
    {/*  */}
    {/* Navigation */}
    <div className="space-y-6">
        <h1 className="text-white font-semibold uppercase text-xl font-roboto">Navigation</h1>
        <ul className="flex flex-col gap-4">
            <li className="">
                <span className="text-white hover:text-sky-400 duration-300 capitalize">Home</span></li>
            <li className="">
                <span className="text-white hover:text-sky-400 duration-300 capitalize">Projects</span></li>
            <li className="">
                <span className="text-white hover:text-sky-400 duration-300 capitalize">What we do</span></li>
            <li className="">
                <span className="text-white hover:text-sky-400 duration-300 capitalize">About Us</span></li>
        </ul>
    </div>
    {/*  */}
    {/* Tags */}
    <div className="space-y-6 overflow-hidden">
        <h1 className="text-white font-semibold uppercase text-xl font-roboto">Tags</h1>
        <div className="grid grid-cols-5 gap-[5px]">

        <div className="col-span-1">
            <button className="text-white bg-black/10 px-3 py-2 hover:bg-yellow-400 duration-300 rounded-lg shadow-l">recipes</button>
        </div>
        <div className="col-span-2">
            <button className="text-white bg-black/10 px-4 py-2 hover:bg-yellow-400 duration-300 rounded-lg shadow-l">ingredients</button>
        </div>
        <div className="col-span-2">
            <button className="text-white bg-black/10 px-4 py-2 hover:bg-yellow-400 duration-300 rounded-lg shadow-l">food</button>
        </div>

        </div>
        <div className="grid grid-cols-2 gap-1">

            <button className="col-span-1 text-white bg-black/10 rounded-lg shadow-lg px-3 py-2 hover:bg-yellow-400 duration-300">dinner</button>
            <button className="text-white col-span-1 bg-black/10 rounded-lg shadow-lg px-4 py-2 hover:bg-yellow-400 duration-300">breakfast</button>

        </div>
    </div>
    {/*  */}



    </div>

    </footer>
  )
}

export default Footer