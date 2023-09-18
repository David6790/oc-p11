import React from "react";
import CookieConsent from "react-cookie-consent";
import { acceptCookies } from "../features/users/userSlice";
import { allowCookies } from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

const UseCookies = () => {
  const dispatch = useDispatch();
  const okCookies = useSelector(acceptCookies);

  return !okCookies ? (
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
