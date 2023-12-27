/* eslint-disable jsx-a11y/anchor-is-valid */
// import components
// import { Users } from ".";

// import image
// import Img from "../assets/img/banner-img.png";
import Img from "../assets/img/perfume.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text */}
          <div className="flex-1">
            <h1
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Let's Explore <br /> Three-Dimensional Visually.
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              adipisci accusantium cum harum ullam molestias!
            </p>
            {/* Buttons */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] 
              mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Get it now</button>
              {/* <a
                className="border-b-2 border-transparent hover:border-white transition ease-out"
                href="#"
              >
                Explore Device
              </a> */}
            </div>
            {/* <Users /> */}
          </div>
          {/* Image */}
          <div
            className="bg-[#e40e8e] rounded-full flex items-center justify-center lg:w-auto w-1/2 mx-auto lg:my-0 mt-12 mb-8"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <img className="w-full" src={Img} alt="banner-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
