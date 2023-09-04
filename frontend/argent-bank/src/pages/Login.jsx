import React, { useState } from "react";
import Layout from "../layout/Layout";
import { setUser } from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";

import {
  useLoginMutation,
  useProfileMutation,
} from "../API/Authentification/api";
import Cookies from "js-cookie";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation, { isLoading, isError }] = useLoginMutation();
  const [profileMutation] = useProfileMutation();
  const isLoggedIn = useSelector((state) => state.user.userLoggedIn);

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };
    try {
      const response = await loginMutation(credentials);
      const token = response.data.body.token;

      Cookies.set("authToken", token, {
        httpOnly: false,
        secure: true,
        sameSite: "strict",
      });
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }

    try {
      const authToken = Cookies.get("authToken");
      const profile = await profileMutation(`Bearer ${authToken}`);
      dispatch(setUser(profile));
      console.log(profile);
      console.log(isLoggedIn);
    } catch (error) {
      console.error("erreur lors de la connexion :", error);
    }
  };
  return (
    <Layout className={"main bg-dark"}>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label>Remember me</label>
          </div>
          <button className="sign-in-button" onClick={handleLogin}>
            {isLoading ? "Loading" : "Sign-In"}
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Login;
