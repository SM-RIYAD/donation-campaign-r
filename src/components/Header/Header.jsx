
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="flex lg:flex-row flex-col md:flex-col  mx-20 mt-10">
            <div className="flex-grow lg:block md:flex md:justify-center">

                <img src="../../../images/Logo.png" alt=""  />
            </div>


            <div className="flex items-center justify-center lg:mt-0 mt-10 md:mt-10 gap-10 lg:flex-row flex-col md:flex-col">

            <NavLink to="/">  <p>Home</p>  </NavLink>
            <NavLink to="/donation">   <p>Donation</p>  </NavLink>
            <NavLink to="/statistics">   <p>Statistics</p> </NavLink>
                
            </div>
        </div>
    );
};

export default Header;