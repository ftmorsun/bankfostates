import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";
import "./Header.css";
function Header() {

    return (
            <nav  className="header">
                {/*Logo */}
                <Link to="/">
                    <img className="header_logo" src={logo} alt=""/>
                </Link>
                <div>
                    <span className="header_title">Orsun Bank</span>
                </div>
                <div className="header__search">
                    <input type="text" className="header_searchInput" />
                     <SearchIcon className="header_searchIcon" />
                 </div>

                 <div className="header__nav">
                 <Link to="/login" className="header_link">
                 <div className="header_option">
                    <span className="header_lineOne">Hello</span>
                    <span className="header_lineTwo">Sign in</span>
                </div>


                 </Link>
                 <Link to="/register" className="header_link" >
                     <div className="header_option" >
                         <span className="header_lineOne">New User</span>
                         <span className="header_lineTwo" > Register</span>
                     </div>
                 </Link>
                 <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingCart />
            <span className="header_lineTwo header_basketCount">
      
            </span>
          </div>
        </Link>

                 </div>



            </nav>





    );
  }
  export default Header;