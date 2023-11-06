import { Link } from "react-router-dom";
import './App.css'
import logo from "./assets/pngwing.com.png";

const NavBar = () => {

    return (
      <>
        <div className="nav-container">
         
          <Link
            to="/"
            className="link"
          >
            <img src={logo} alt="logo" />

          </Link>

      
        
          <div
            className=".nav-items"
          >
            <Link
              to="/"
              className="link"

            >
             Schools
            </Link>
            <Link
              to="Hospitals"
              className="link"

            >
             Hospitals
            </Link>
         
          <Link
              to="Restaurants"
              className="link"

            >
             Restaurants
            </Link>
            <Link
              to="ShoppingMalls"
              className="link"

            >
             ShoppingMalls
            </Link>
            </div>
        </div>
      </>
    )

  }

export default NavBar;
