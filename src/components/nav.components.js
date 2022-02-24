
import React from "react";
import { NavLink } from "react-router-dom";

const NavComponents = () =>{
    return(
        <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand logo" to="/">
            <img src={require("../assets/logo.svg")}></img>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/allchargebackdetails">
                  AllChargebackDetails
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customerDetails">
                  Customer Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    );
};


export default NavComponents;
