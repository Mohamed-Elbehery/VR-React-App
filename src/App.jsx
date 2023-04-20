// import "useState" Hook
import { useState, useEffect } from "react";

// import components
import {
  Banner,
  Experience,
  Explore,
  Header,
  Headsets,
  NavMobile,
  Testimonial,
  Video,
} from "./components";

// import aos (animate on scroll)
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 400,
    });
  });

  return (
    <main
      className="relative overflow-hidden before:w-[600px] before:h-[200px] 
      before:bg-circle before:bg-no-repeat before:absolute before:-top-16 before:left-[600px] before:hidden before:lg:flex"
    >
      <Header setNavMobile={setNavMobile} />
      <Banner />
      {/* Mobile Nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
    </main>
  );
};

export default App;
