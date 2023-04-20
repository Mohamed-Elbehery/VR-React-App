// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import data
import { slider } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1028: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((slide, index) => {
        // destructure slide
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide
            className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] 
          via-[#2A1428] to-[#331A35]"
            key={index}
          >
            <p className="mb-8 min-h-[100px] text-[15px]">{message}</p>
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <div className="w-14">
                <img className="mb-3 md:mb-0" src={image} alt={name} />
              </div>
              <div>
                <p className="font-medium text-base">{name}</p>
                <p className="font-medium text-rose-600">{email}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
