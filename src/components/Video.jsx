// import "useState" Hook
import { useState } from "react";

// import modal video
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";

// import icons
import { BsPlayCircleFill } from "react-icons/bs";

const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#534686]/30 py-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-center lg:flex-row lg:justify-between">
          <h3
            className="text-2xl font-semibold mb-8 lg:mb-0"
            data-aos="fade-right"
            data-aos-offset="350"
          >
            Awesome Experiences with Virtual Reality World
          </h3>
          {/* Modal Video */}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="NOk_M1Ib5F0"
            onClose={() => setIsOpen(false)}
          />
          {/* Video */}
          <div
            className="group bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            data-aos="fade-left"
            data-aos-offset="350"
          >
            <div className="cursor-pointer">
              <BsPlayCircleFill className="text-4xl text-white/80 group-hover:text-white group-hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
