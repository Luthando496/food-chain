import React,{useState} from 'react'
import {BsFillCheckSquareFill} from 'react-icons/bs'



const Tab = () => {
    const [tab,setTab] = useState(0)
  return (
    <section className='w-full my-8'>
        <div className="px-10 lg:px-16 grid grid-cols-1  lg:grid-cols-4 gap-3">
        
            <ul className=" w-full hidden lg:block col-span-1 flex-col border-r">
                <li onClick={() => setTab(0)} className={`${tab === 0 ? 'border-r border-r-yellow-500 ' :'border-0' } py-4 cursor-pointer  hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-sm capitalize font-roboto tracking-[3px] ">CHEESE CROISSANTS</p>
                </li>
                <li onClick={() => setTab(1)} className={`${tab === 1 ? 'border-r border-r-yellow-500 ' :'border-0' } py-4 cursor-pointer  hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-sm capitalize font-roboto tracking-[3px]">BRUSCHETTI</p>
                </li>
                <li onClick={() => setTab(2)} className={`${tab === 2 ? 'border-r border-r-yellow-500 ' :'border-0' } py-4 cursor-pointer  hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-sm capitalize font-roboto tracking-[3px]">AWESOME VEGETABLES</p>
                </li>
                <li onClick={() => setTab(3)} className={`${tab === 3 ? 'border-r border-r-yellow-500 ' :'border-0' } py-4 cursor-pointer  hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-sm capitalize font-roboto tracking-[3px]">TASTY SNACKs</p>
                </li>
                <li onClick={() => setTab(4)} className={`${tab === 4 ? 'border-r border-r-yellow-500 ' :'border-0' } py-4 cursor-pointer  hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-sm capitalize font-roboto tracking-[3px]">ALL-TIME BEST RECIPES</p>
                </li>
                <li onClick={() => setTab(5)} className={`${tab === 5 ? 'border-r border-r-yellow-500 ' :'border-0' } py-4 cursor-pointer  hover:text-yellow-400 text-black/70 duration-300`}>
                    <p className="text-sm capitalize font-roboto tracking-[3px]">MEAL FOR WHOLE FAMILY</p>
                </li>
            </ul>
            {/* left */}
            {/* right */}

            {/* tab 0 */}
            <div  className={`${tab === 0 ? 'block' :'hidden' }  col-span-3 px-6 grid gap-4 grid-cols-1 lg:grid-cols-3`}>
            <div className="col-span-2">
            <h1 className="text-black/70 text-xl md:text-2xl lg:text-4xl tracking-[2px] font-bold uppercase ">TODAY’S BEST OFFER</h1>
            <p className="my-8 text-gray-400 font-roboto text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p className="text-base text-gray-400 font-roboto font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>

            <div className="img w-full col-span-1">
                <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image1.jpg" alt="image" className="w-full" />
            </div>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div  className={`${tab === 1 ? 'block' :'hidden' }  col-span-3 px-6 grid gap-4 grid-cols-1 lg:grid-cols-3`}>
            <div className="col-span-2">
            <h1 className="text-black/70 text-xl md:text-2xl lg:text-4xl tracking-[2px] font-bold uppercase ">SMALL BITE</h1>
            <p className="my-8 text-gray-400 font-roboto text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p className="text-base text-gray-400 font-roboto font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>

            <div className="img w-full col-span-1">
                <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image4.jpg" alt="image" className="w-full" />
            </div>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div  className={`${tab === 2 ? 'block' :'hidden' }  col-span-3 px-6 grid gap-4 grid-cols-1 lg:grid-cols-3`}>
            <div className="col-span-2">
            <h1 className="text-black/70 text-xl md:text-2xl lg:text-4xl tracking-[2px] font-bold uppercase ">TODAY’S MENU</h1>
            <p className="my-8 text-gray-400 font-roboto text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p className="text-base text-gray-400 font-roboto font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>

            <div className="img w-full col-span-1">
                <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image2.jpg" alt="image" className="w-full" />
            </div>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div  className={`${tab === 3 ? 'block' :'hidden' }  col-span-3 px-6 grid gap-4 grid-cols-1 lg:grid-cols-3`}>
            <div className="col-span-2">
            <h1 className="text-black/70 text-xl md:text-2xl lg:text-4xl tracking-[2px] font-bold uppercase ">TRY OUR SNACKS</h1>
            <p className="my-8 text-gray-400 font-roboto text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p className="text-base text-gray-400 font-roboto font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>

            <div className="img w-full col-span-1">
                <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image5.jpg" alt="image" className="w-full" />
            </div>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div  className={`${tab === 4 ? 'block' :'hidden' }  col-span-3 px-6 grid gap-4 grid-cols-1 lg:grid-cols-3`}>
            <div className="col-span-2">
            <h1 className="text-black/70 text-xl md:text-2xl lg:text-4xl tracking-[2px] font-bold uppercase ">EXOTIC TASTE</h1>
            <p className="my-8 text-gray-400 font-roboto text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p className="text-base text-gray-400 font-roboto font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>

            <div className="img w-full col-span-1">
                <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image6.jpg" alt="image" className="w-full" />
            </div>

            </div>
            {/* //  */}
            {/* tab 0 */}
            <div  className={`${tab === 5 ? 'block' :'hidden' }  col-span-3 px-6 grid gap-4 grid-cols-1 lg:grid-cols-3`}>
            <div className="col-span-2">
            <h1 className="text-black/70 text-xl md:text-2xl lg:text-4xl tracking-[2px] font-bold uppercase ">OFFER FOR DESSERTS</h1>
            <p className="my-8 text-gray-400 font-roboto text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p className="text-base text-gray-400 font-roboto font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
            </div>

            <div className="img w-full col-span-1">
                <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-tab-image3.jpg" alt="image" className="w-full" />
            </div>

            </div>
            {/* //  */}

            {/*  */}
            

    

        </div>
    </section>
  )
}

export default Tab