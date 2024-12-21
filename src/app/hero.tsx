"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const images = ["/slider1.png", "/slider2.png", "/slider3.png"];

export default function Hero() {
  return (
    <main>
        <div className="w-full md:h-[80vh] h-[100vh] relative">
        {/* Static Text */}
        <div className="absolute inset-0 z-20 mt-32 flex flex-col justify-center items-start text-white md:px-20 px-6 pointer-events-none">
          <h1 className="text-base font-semibold mb-2 backdrop-blur-2xl px-2 rounded-2xl pointer-events-auto">
            ADVENTURE
          </h1>
          <h2 className="md:text-5xl text-3xl font-bold md:mb-2 mb-4 md:w-[60%] pointer-events-auto">
            Richard Norton photorealistic rendering as real photos
          </h2>
          <div className="flex md:flex-row flex-col items-start gap-2 pointer-events-auto">
            <h3 className="text-base md:mb-4">08.08.2021</h3>
            <div className="bg-blue-600 md:mt-3 w-14 h-0.5 rounded-full"></div>
            <p className="md:text-base text-sm leading-relaxed md:w-[60%]">
              Progressively incentivize cooperative systems through technically
              sound functionalities. Credibly productivate seamless data.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="absolute inset-0 z-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={3000}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
            }}
            loop={true}
            className="w-full h-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      
    </main>
  );
}
