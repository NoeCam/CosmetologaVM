import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoCompany from "../components/LogoCompany.jsx";
import iconHome from "../assets/icon-Home.svg";
import iconAbout from "../assets/icon-about.svg";
import iconMap from "../assets/icon-Map.svg";
import Title from "./Title.jsx";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center">
        <LogoCompany />
        <Title />
      </div>
      <div className={isMenuOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="top-0 right-0 px-8 py-8"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="flex flex-col items-center justify-between min-h-[250px]">
          <li className="my-8  uppercase">
            <a href="/about">About</a>
          </li>
          <li className=" my-8  uppercase">
            <a href="/contact">Contact</a>
          </li>
          <li className=" my-8 uppercase">
            <a href="/services">Services</a>
          </li>
        </ul>
      </div>
      <nav className=" pt-1 sm:pt-0 bg-white navbar navbar-expand navbar-light bg-light flex fixed bottom-0 w-full md:static md:w-auto">
        <ul className="navbar-nav flex justify-around w-full md:w-auto">
          <li className="nav-item flex flex-col items-center">
            <NavLink to="/" className="nav-link flex flex-col items-center">
              <img
                className="icon-NavBar sm:hidden "
                src={iconHome}
                alt="Home"
              />
              <p className="text-NavBar">Home</p>
            </NavLink>
          </li>

          <li className="nav-item flex flex-col items-center">
            <NavLink
              to="/about"
              className="nav-link flex flex-col items-center"
            >
              <img
                className="icon-NavBar sm:hidden"
                src={iconAbout}
                alt="About"
              />
              <p className="text-NavBar">About</p>
            </NavLink>
          </li>

          <li className="nav-item flex flex-col items-center">
            <NavLink
              to="/contact"
              className="nav-link flex flex-col items-center"
            >
              <img
                className="icon-NavBar sm:hidden"
                src={iconMap}
                alt="Contact"
              />
              <p className="text-NavBar">Contact</p>
            </NavLink>
          </li>

          <li className="nav-item flex flex-col items-center">
            <NavLink
              to="/services"
              className="nav-link flex flex-col items-center"
            >
              <div
                className="HAMBURGER-ICON space-y-1.5 sm:hidden pt-1"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <span className="block h-0.5 w-7 bg-black"></span>
                <span className="block h-0.5 w-7 bg-black"></span>
                <span className="block h-0.5 w-7 bg-black"></span>
              </div>
              <p className="text-NavBar">Services</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
