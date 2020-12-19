import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import "./Header.css";
function Header() {
    return (
            <nav  className="header">
                {/*Logo */}
                <Link to="/">
                    <img className="header_logo" src={logo} alt=""/>
                </Link>
                <div>
                    <span className="header_title">Bank of States</span>
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
                 </div>



            </nav>





    );
  }
  export default Header;