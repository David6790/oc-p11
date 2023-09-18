import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userLoggedIn, userProfile } from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../features/users/userSlice";
import Cookies from "js-cookie";

const Header = () => {
  const isLoggedIn = useSelector(userLoggedIn);
  const profile = useSelector(userProfile);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    Cookies.remove("authToken");
    Cookies.remove("authorizeCookies");
    sessionStorage.removeItem("authToken");
    navigate("/");
  };

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
        {isLoggedIn ? (
          <NavLink to="/user" className={"main-nav-item"}>
            <i className="fa fa-user-circle"></i>
            {profile ? profile.userName : "Profile"}
          </NavLink>
        ) : (
          <NavLink to="/login" className={"main-nav-item"}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {isLoggedIn && (
          <button
            className={"main-nav-item main-nav-button"}
            onClick={handleLogOut}
          >
            {" "}
            <i className="fa fa-sign-out"></i>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
