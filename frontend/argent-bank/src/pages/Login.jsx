import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useLoginMutation } from "../API/Authentification/api";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation, { isLoading, isError }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };
    try {
      const response = await loginMutation(credentials);
      console.log(credentials);
      console.log(response);
      const token = response.data.body.token;
      console.log(token);

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
              id="username"
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
          {isError ? (
            <p>Identifiants erronés T'ES QU'UNE MERDE</p>
          ) : (
            <p>Connection Réussi bravo le DAV!!!</p>
          )}
        </form>
      </section>
    </Layout>
  );
};

export default Login;
