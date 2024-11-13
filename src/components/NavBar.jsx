import { NavLink } from "react-router-dom";
import LogoCompany from "../components/LogoCompany.jsx";

const NavBar = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <LogoCompany />

      <nav className=" navbar navbar-expand navbar-light bg-light flex flex-row justify-end">
        <ul className="navbar-nav flex space-x-4">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
