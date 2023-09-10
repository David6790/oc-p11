import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

import { allowCookies } from "../features/users/userSlice";
import { useDispatch } from "react-redux";

const UseCookies = () => {
  const dispatch = useDispatch();
  const authToken = Cookies.get("authToken");
  return !authToken ? (
    <CookieConsent
      location="bottom"
      buttonText="I Agree"
      cookieName="authorizeCookies"
      style={{ background: "#2c3e50" }}
      buttonStyle={{
        backgroundColor: "#42b983",
        color: "white",
        fontSize: "13px",
      }}
      expires={150}
      enableDeclineButton
      onAccept={() => {
        dispatch(allowCookies());
      }}
    >
      <p>We use cookies to enhance the user experience.</p>
      <span style={{ fontSize: "15px" }}>
        If you choose not to use cookies, your connection will be lost after
        refresh to maintain security
      </span>
    </CookieConsent>
  ) : (
    ""
  );
};

export default UseCookies;
