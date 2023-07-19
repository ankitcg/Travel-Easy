import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = ({ showHeader, setShowHeader }) => {
    // Clear the user token from localStorage or any other storage mechanism used
    localStorage.removeItem("token");

    // Redirect the user to the login page or the homepage
    navigate("/"); // Replace "/login" with the desired path for the login page
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <>
      <div className="flex justify-between h-20 border-solid box-border border-2">
        <div className="flex justify-start">
          <Link
            className=" bg-white font-extrabold my-5  mx-10 text-2xl text-red-500 "
            to="/"
          >
            Travel-Easy
          </Link>
        </div>
        {isLoggedIn && ( // Show the links only if the user is logged in
          <div className="justify-end my-5 ">
            <Link className="mx-4 text-lg font-semibold" to="/mybookings">
              My Bookings
            </Link>
            <button
              className="mx-6 text-lg font-semibold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
