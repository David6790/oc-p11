import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </NavLink>

      <h1 className="sr-only">Argent Bank</h1>

      <div>
        <NavLink to="/login" className={"main-nav-item"}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
