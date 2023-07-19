import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/self-drive-norwa-car-people.png";
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formRef = useRef(null);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/signin",
        {
          email,
          password,
        },
        {
          headers: {
            // Attach the token to the Authorization header
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setEmail("");
      setPassword("");
      if (response.status === 200) {
        // Redirect to the success page
        localStorage.setItem("token", response.data.token);
        navigate("/journeydate");
        alert("User Logged-In Successfully");
      } else {
        // Handle unsuccessful registration
        console.log("Login failed");
      }
    } catch (error) {
      console.error(error.message);
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
            <Link
              className="mx-40 text-2xl underline text-white"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="text-end text-2xl underline  text-white"
              to="/admin"
            >
              Admin Login
            </Link>
          </div>
        </div>
        <div className="bg-slate-200 h-80 flex w-4/12 rounded-2xl mx-40 my-28">
          <form className="mx-4" onSubmit={submitHandler} ref={formRef}>
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

export default Home;
