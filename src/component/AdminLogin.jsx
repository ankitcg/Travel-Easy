import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/self-drive-norwa-car-people.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Fixed admin credentials (replace with your actual credentials)
    const fixedEmail = "admin@traveleasy.com";
    const fixedPassword = "admin123";

    // Check if the entered credentials match the fixed credentials
    if (email === fixedEmail && password === fixedPassword) {
      // Admin login successful, redirect to the admin dashboard or any other admin page
      navigate("/addcars"); // Replace "/admin/dashboard" with the desired admin page path
    } else {
      // Handle admin login failure, show error message to the admin
      alert("Invalid credentials. Please try again.");
    }
  };

  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={divStyle} className="h-screen bg-cover bg-center flex flex-col">
      <div className="flex">
        <div className="my-40">
          <p className="font-extrabold text-4xl w-2/3 mx-36 text-black">
            All you needed was a wheel in your hand and four on the road.
          </p>
          <div className="my-14">
            <Link className="mx-40 text-2xl underline text-white" to="/">
              User Sign-In
            </Link>
          </div>
        </div>
        <div className="bg-slate-200 h-80 flex w-4/12 rounded-2xl mx-40 my-28">
          <form className="mx-4" onSubmit={handleAdminLogin}>
            <h1 className="font-semibold text-lg my-5 text-left">
              Sign in to your Account
            </h1>
            <input
              className="my-8 h-8 block w-80 "
              type="text"
              placeholder="Phone/Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="h-8 block w-80"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Link className="block text-end text-blue-500" to="/">
              Forgot Password ?
            </Link>

            <div className="my-5 flex justify-end">
              <button
                type="submit"
                className="w-28 h-10 bg-slate-400 text-center rounded-2xl"
              >
                SIGN IN
              </button>
            </div>
            <Link to="/register" className="text-blue-600">
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
