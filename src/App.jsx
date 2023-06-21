import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";



function App() {
  const [count, setCount] = useState(0)

  const bogliasco = "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const countyClare = "https://images.pexels.com/photos/5604829/pexels-photo-5604829.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const craterRock = "https://images.pexels.com/photos/4411711/pexels-photo-4411711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const giauPass = "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <>
      <Navbar />
      <header className="w-full">
      <HeroSlider
      height={"100vh"}
      autoplay
      className='w-full'
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      {/* <Overlay>
        <Wrapper>
          <Title>Basic Setup</Title>
          <h1>
            Check out the documentation for more advanced examples.
          </h1>
        </Wrapper>
      </Overlay> */}

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
        
      />

      <MenuNav />
    </HeroSlider>
      </header>
      
    </>
  )
}

export default App
