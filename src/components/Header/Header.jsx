import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="flex lg:flex-row flex-col md:flex-col  mx-20 mt-10  lg:mb-0 md:mb-24">
      <div className="flex-grow lg:block md:flex md:justify-center">
        <img src="https://i.ibb.co/QmpXzQn/Logo.png" alt="" />
      </div>

      <nav className="flex items-center justify-center z-30 lg:mt-0 mt-10 md:mt-10 gap-10 lg:flex-row flex-col md:flex-col">
        <NavLink to="/">
          {" "}
          <p className="font-bold">Home</p>{" "}
        </NavLink>
        <NavLink to="/donation">
          {" "}
          <p className="font-bold">Donation</p>{" "}
        </NavLink>
        <NavLink to="/statistics">
          {" "}
          <p className="font-bold">Statistics</p>{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
