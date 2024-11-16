import { NavLink } from "react-router-dom";
import LogoCompany from "../components/LogoCompany.jsx";
import iconHome from "../assets/icon-Home.svg";

const NavBar = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center">
      <LogoCompany />

      <nav className="navbar navbar-expand navbar-light bg-light flex fixed bottom-0 w-full md:static md:w-auto">
        <ul className="navbar-nav flex justify-around w-full md:w-auto">
          <li className="nav-item flex flex-col items-center">
            <NavLink to="/" className="nav-link flex flex-col items-center">
              <img
                className="icon-NavBar sm:hidden"
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
                src={iconHome}
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
                src={iconHome}
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
              <img
                className="icon-NavBar sm:hidden"
                src={iconHome}
                alt="Services"
              />
              <p className="text-NavBar">Services</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
