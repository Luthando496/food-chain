import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import TopHeader from './components/TopHeader';



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar />
      <Header />
      <section className="mt-[12rem]">
        <div className="containi">
        <TopHeader paragraph={''} header={'TASTY AND CRUNCHY'} title={'OUR STORY'} />

        <div className="grid mx-auto  grid-cols-1 mb-12 gap-10 lg:grid-cols-2 px-4 lg:px-16">
          <div className="img w-full h-[25rem]">
          <img src="https://images.pexels.com/photos/2067423/pexels-photo-2067423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full h-full object-cover" />
          </div>
          <div className="img w-full h-[25rem]">
          <img src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <h2 className="text-center uppercase lg:tracking-[8px] font-roboto font-light">Luthando Didiza</h2>
        <div className="my-6 flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-3.png" alt="logo" className="w" />
        </div>
          
        </div>
      </section>

      <section className="w-full bg-gray-200/90 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">

      <div className="w-full">
      <div className="w-full flex flex-col gap-3 my-10">
      <h3 className="text-sm md:text-[15px] tracking-[4px] font-thin text-black ">TASTY AND CRUNCHY</h3>
      <h1 className="text-xl lg:text-6xl tracking-[4px] font-semibold text-black/80">INGREDIENTS</h1>
      <p className="text-gray-600 text-base font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor incidition ullam.</p>
      </div>

      <a href="www.twitter.com" className="px-10 relative hover:text-white overflow-hidden btn uppercase font-roboto tracking-[2px] my-10 text-[14px] py-5 shadow-lg bg-white  text-black font-semibold">view our menu</a>

      </div>

      <div className="w-full">

      <div className="img flex flex-col items-center justify-center py-6">
        <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-4.jpg" alt="image" className="w-full" />
      </div>


      </div>

      </div>

      </section>

      <section className="h-[70vh] meat">

      </section>

      <section className="mt-20 mb-20">
        <TopHeader title={'OUR MENU'} header={'TASTY AND CRUNCHY'} />

        <div className="grid grid-cols-2 gap-12 px-14 my-10">
          {/* left */}

          <div className="w-full flex flex-col gap-12">

            <div className="w-full">
            <div className="flex border-b border-b-zinc-400 justify-between items-center">
            <h2 className="">
            <span className="text-sm font-semibold font-roboto md:text-base uppercase">beef burger</span></h2>
            <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 100,00</span>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
            </div>

            </div>
            {/*  */}
            <div className="w-full">
            <div className="flex border-b border-b-zinc-400 justify-between items-center">
            <h2 className="">
            <span className="text-sm font-semibold font-roboto md:text-base uppercase">ITALIAN SPAGHETTI</span></h2>
            <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 100,00</span>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
            </div>

            </div>
            {/*  */}
            <div className="w-full">
            <div className="flex border-b border-b-zinc-400 justify-between items-center">
            <h2 className="">
            <span className="text-sm font-semibold font-roboto md:text-base uppercase">BEEF BURGER</span></h2>
            <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 80,00</span>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
            </div>

            </div>
            {/*  */}
            <div className="w-full">
            <div className="flex justify-between items-center border-b border-b-zinc-400">
            <h2 className="">
            <span className="text-sm font-semibold font-roboto md:text-base uppercase">STUFFED STRAWBERRY</span></h2>
            <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 78,00</span>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
            </div>

            </div>
            {/*  */}
          </div>
          {/* right */}
          <div className="w-full flex flex-col gap-12">

          <div className="w-full">
          <div className="flex border-b border-b-zinc-400 justify-between items-center">
          <h2 className="">
          <span className="text-sm font-semibold font-roboto md:text-base uppercase">beef burger</span></h2>
          <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 100,00</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
          </div>

          </div>
          {/*  */}
          <div className="w-full">
          <div className="flex border-b border-b-zinc-400 justify-between items-center">
          <h2 className="">
          <span className="text-sm font-semibold font-roboto md:text-base uppercase">ITALIAN SPAGHETTI</span></h2>
          <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 100,00</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
          </div>

          </div>
          {/*  */}
          <div className="w-full">
          <div className="flex border-b border-b-zinc-400 justify-between items-center">
          <h2 className="">
          <span className="text-sm font-semibold font-roboto md:text-base uppercase">BEEF BURGER</span></h2>
          <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 80,00</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
          </div>

          </div>
          {/*  */}
          <div className="w-full">
          <div className="flex justify-between items-center border-b border-b-zinc-400">
          <h2 className="">
          <span className="text-sm font-semibold font-roboto md:text-base uppercase">STUFFED STRAWBERRY</span></h2>
          <span className="text-sm font-semibold font-roboto md:text-base lg:text-base">$ 78,00</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-600 text-base font-medium font-roboto">Lorem ipsum dolor sit amet, feugiat delicata.</p>
          </div>

          </div>
          {/*  */}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-28">

      <div className="grid lg:grid-cols-4 gap-6 grid-cols-1 md:grid-cols-2 px-14">

      <div className="w-full">
        <div className="w-full  flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon1.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body">
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-gray-300 font-semibold text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <div className="im w-full flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon1.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body">
          <h3 className="text-center text-base font-roboto text-black font">FRESH INGREDIENTS</h3>
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-gray-300 font-semibold text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <div className="im w-full flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon1.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body">
          <h3 className="text-center text-base font-roboto text-black font">FRESH INGREDIENTS</h3>
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-gray-300 font-semibold text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <div className="im w-full flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon1.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body">
          <h3 className="text-center text-base font-roboto text-black font">FRESH INGREDIENTS</h3>
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-gray-300 font-semibold text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>

      </div>

      </section>
      
      
    </>
  )
}

export default App
