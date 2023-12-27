/* eslint-disable jsx-a11y/anchor-is-valid */
// import components
import { Nav } from "./";

// import images
import Logo from "../assets/img/logo.svg";

// import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#">
            <img className="h-[30px]" src={Logo} alt="logo" />
            {/* <h1 className="text-4xl">اناقة</h1> */}
          </a>
          {/* Nav */}
          <Nav />
          {/* Nav Mobile Button */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
