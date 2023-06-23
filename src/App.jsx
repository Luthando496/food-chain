import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Tab from './components/Tap';
import FeaturedSlider from './components/FeaturedSlider';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from './components/Footer';





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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-14 my-10">
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

      <div className="grid lg:grid-cols-4 gap-y-10 lg:gap-y-0 md:gap-x-9 grid-cols-1 md:grid-cols-2 px-14">

      <div className="w-full">
        <div className="w-full  flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon1.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body mt-6 space-y-4">
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-black/80 text-center font-light text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <div className="im w-full flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon2.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body mt-6 space-y-4">
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-black/80 text-center font-light text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <div className="im w-full flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon4.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body mt-6 space-y-4">
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-black/80 text-center font-light text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <div className="im w-full flex items-center justify-center">
          <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-icon3.png" alt="image" className="w-full h-[6rem] object-contain" />
        </div>
        <div className="im-body mt-6 space-y-4">
          <h3 className="text-center text-xl font-roboto text-black font">FRESH INGREDIENTS</h3>
          <p className="text-black/80 text-center font-light text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
        </div>
      </div>

      </div>

      </section>

      <section className="w-full py-20 form">
      <div className="text my-10">
          <h3 className="text-sm md:text-[15px] tracking-[4px] text-white font-thin text-whit text-center">TASTY AND CRUNCHY</h3>
          <h1 className="text-center tracking-[5px] text-xl md:text-2xl lg:text-6xl my-4 font-semibold text-white/70 font-roboto">RESERVATIONS</h1>
          <p className="text-center leading-[1.9] text-base font-medium text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto<br /> doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo<br/> condorico consectetur adipiscing elitut aliquip.</p>
        </div>

        <div className="lg:w-[70%] w-[93%] md:w[80%] mx-auto   mt-28 ">
        <div className="w-full grid gap-4 md:grid-cols-2 grid-cols-1">
        <div className="form-control">
          <input type="text" className="w-full px-10 py-4 focus:outline-none" placeholder='NAME*' />
        </div>
        <div className="form-control">
          <input type="number" className="w-full px-10 py-4 focus:outline-none" placeholder='NUMBER*' />
        </div>
        <div className="form-control">
          <input type="date" className="w-full px-10 py-4 focus:outline-none"  />
        </div>
        <div className="form-control">
          <input type="text" className="w-full px-10 py-4 focus:outline-none" placeholder='NUMBER*' />
        </div>
        <div className="form-control">
          <input type="number" className="w-full px-10 py-4 focus:outline-none" placeholder='SEATS*' />
        </div>
        <div className="form-control">
          <input type="email" className="w-full px-10 py-4 focus:outline-none" placeholder='EMAIL*' />
        </div>
        </div>
        <div className="form-control mt-8">
          <textarea type="text" className="w-full px-10 pt-6 pb-20 focus:outline-none" placeholder='NUMBER*'></textarea>
        </div>


        </div>
        <div className="lg:w-[15%] w-[43%] md:w[80%] mx-auto mt-10 flex place-items-center">
        
        <a href="www.twitter.com" className="text-roboto hover:bg-white hover:text-black duration-700 text-base text-white w-auto self-center inline-block uppercase px-10 py-3 bg-transparent border border-white">reserve</a>

        </div>
      </section>

      <Tab />

      <FeaturedSlider />

      <section className="w-full bg-img ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6">

      <div className="w-full">
      <div className="w-full flex flex-col gap-3 my-10">
      <h3 className="text-sm md:text-[15px] tracking-[4px] font-thin text-black ">TASTY AND CRUNCHY</h3>
      <h1 className="text-xl lg:text-6xl tracking-[4px] font-semibold text-black/80">OUR CHEF</h1>
      <p className="text-gray-600 text-base font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea commodo condor consectetur adipiscing elit, sed do eiusmod tempor incidition ullam.</p>
      </div>

      <a href="www.twitter.com" className="px-10 relative hover:text-white overflow-hidden btn uppercase font-roboto tracking-[2px] my-10 text-[14px] py-5 shadow-lg bg-white  text-black font-semibold">view our menu</a>

      </div>

      <div className="w-full">

      <div className="img flex flex-col items-center justify-center py-6 h-full">
        <img src="https://savory.qodeinteractive.com/wp-content/uploads/2016/09/home1-main-image-5.jpg" alt="image" className="w-full h-[20rem] object-cover" />
      </div>


      </div>

      </div>

      </section>

      <section className="w-full my-4">
        <TopHeader title={'SPECIAL RECIPES'} header={'TASTY AND CRUNCHY'}  />

        <div className="w-full px-14 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

        <div className="w-full border-b-2 border-b-orange-400">
          <div className="img relative group w-full h-[17rem]">
          <img src="https://images.unsplash.com/photo-1496568554266-bc8a06b4d8b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="image" className="w-full h-full object-cover" />
          <div className="absolute top-0 duration-700 cursor-pointer w-full h-full  group-hover:bg-black/40"></div>
          </div>
          <div className="body my-4">
            <h3><span className="text-base text-gray-600 uppercase">APRIL 11, 2016 HEALTHY</span></h3>

            <h1 className="text-lg md:text-xl my-4 leading-[1.9] lg:text-2xl font-semibold text-black/90">ITALIAN FAMOUS PASTA<br /> WITH MEAT AND<br/> CHEESE</h1>

            <p className="text-gray-600 text-base text-light mb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis</p>
          </div>
        </div>

        <div className="w-full border-b-2 border-b-orange-400">
          <div className="img relative group w-full h-[17rem]">
          <img src="https://images.unsplash.com/photo-1600668293501-7e18590b199d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80" alt="image" className="w-full h-full object-cover" />
          <div className="absolute top-0 duration-700 cursor-pointer w-full h-full  group-hover:bg-black/40"></div>
          </div>
          <div className="body my-4">
            <h3><span className="text-base text-gray-600 uppercase">APRIL 11, 2016 Recipes</span></h3>
              
            <h1 className="text-lg md:text-xl my-4 uppercase leading-[1.9] lg:text-2xl font-semibold text-black/90">Chocolate truffle cake<br /> with honey<br/> flavor</h1>

            <p className="text-gray-600 text-base text-light mb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis</p>
          </div>
        </div>

        <div className="w-full border-b-2 border-b-orange-400">
          <div className="img relative group w-full h-[17rem]">
          <img src="https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="image" className="w-full h-full object-cover" />
          <div className="absolute top-0 duration-700 cursor-pointer w-full h-full  group-hover:bg-black/40"></div>
          </div>
          <div className="body my-4">
            <h3><span className="text-base text-gray-600 uppercase">APRIL 11, 2016 Recipes</span></h3>
              
            <h1 className="text-lg md:text-xl my-4 uppercase leading-[1.9] lg:text-2xl font-semibold text-black/90">Chicken soup with<br /> spring veggies and<br/> pasta</h1>

            <p className="text-gray-600 text-base text-light mb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis</p>
          </div>
        </div>



        </div>
      </section>

      <Footer />

      
      
    </>
  )
}

export default App
