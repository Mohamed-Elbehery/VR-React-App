// import images
import Img from "../assets/img/perfume4.png";
import Img2 from "../assets/img/perfume3.png";

const Experience = () => {
  // background: #c02fe3;
  // height: auto;
  // border-radius: 50%;

  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            {/* Images */}
            <div
              className="self-start w-[250px] h-[auto] rounded-full bg-[#e40e8e] bg-opacity-50"
              data-aos="fade-down"
              data-aos-offset="400"
            >
              <img className="exp-first-img" src={Img} alt="experience-img-1" />
            </div>
            <div
              className="w-[250px] h-[auto] rounded-full bg-[#e40e8e] bg-opacity-50"
              data-aos="fade-up"
              data-aos-offset="400"
            >
              <img
                className="w-full rounded-xl"
                src={Img2}
                alt="experience-img-2"
              />
            </div>
          </div>
          {/* Text */}
          <div
            className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h2 className="text-3xl font-bold mb-6">
              New Experience In Playing Games
            </h2>
            <p className="font-secondary mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              similique veritatis labore ratione optio debitis, laborum in
              facere facilis. A.
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
