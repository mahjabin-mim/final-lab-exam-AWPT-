import React from "react";
import LoginPage from "@/app/components/login";
import Navbar from "@/app/components/navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      <LoginPage />
    </div>
  );
};

export default Login;
