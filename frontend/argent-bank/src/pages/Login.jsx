import React from "react";
import Layout from "../layout/Layout";

const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <Layout className={"main bg-dark"}>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <button class="sign-in-button" onClick={handleClick}>
            Sign In
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default Login;
