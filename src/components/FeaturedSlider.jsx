import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';




const FeaturedSlider = () => {
  return (
    <>
        <section className="w-full py-14 bg-white my-6">
            <div className="px-16 flex justify-between">
                <h1 className="text-2xl uppercase font-roboto tracking-[2px] font-thin text-black">Our Menu</h1>

                
            </div>

            <div className="mt-14 px-2">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                // when window width is >= 640px
                640: {
                width: 640,
                slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                width: 768,
                slidesPerView: 2,
                },
                900: {
                width: 900,
                slidesPerView: 3,
                },
            }}
                navigation
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                //   onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://plus.unsplash.com/premium_photo-1684923610927-326aa9ca327a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1610970878459-a0e464d7592b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1592571832175-cbbedad399a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[16rem]">
                    <div className="img w-full h-full">
                        <img src="https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="building" className="w-full h-full" />
                    </div>

                    </div>
                </SwiperSlide>

            
            </Swiper>

            </div>
         

        </section>

    </>
  )
}

export default FeaturedSlider