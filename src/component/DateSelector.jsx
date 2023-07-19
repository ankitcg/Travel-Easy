import React, { useState } from "react";
import background from "../assets/self-drive-norwa-car-people.png";
import { useNavigate, useLocation } from "react-router-dom";

const DateSelector = ({
  setOrigin,
  setDestination,
  setStartDate,
  setReturnDate,
}) => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/selectcar");
  };

  const divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const location = useLocation();
  const {
    origin: initialOrigin,
    destination: initialDestination,
    startdate: initialStartDate,
    returnDate: initialReturnDate,
  } = location.state || {};

  const [origin, setEditableOrigin] = useState(initialOrigin || "");
  const [destination, setEditableDestination] = useState(
    initialDestination || ""
  );
  const [startdate, setEditableStartDate] = useState(initialStartDate || "");
  const [returnDate, setEditableReturnDate] = useState(initialReturnDate || "");

  return (
    <div style={divStyle} className="h-screen bg-cover bg-center flex flex-col">
      <div className="my-40 mx-48 bg-white w-2/5 rounded-3xl h-3/4 ">
        <p className="font-extrabold text-2xl my-4 mx-4 text-black">
          Select Your Journey Starting & Return Date
        </p>
        <div className="mx-8">
          <form onSubmit={submitHandler}>
            <label>Origin Name</label>
            <input
              className="block px-4 my-2 h-14 bg-slate-300 w-4/5 rounded-3xl"
              type="text"
              placeholder="From"
              value={origin}
              onChange={(e) => {
                setOrigin(e.target.value);
                setEditableOrigin(e.target.value);
              }}
            />
            <label>Destination Name</label>
            <input
              className="block px-4 my-2 h-14 bg-slate-300 w-4/5 rounded-3xl"
              type="text"
              placeholder="To"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
                setEditableDestination(e.target.value);
              }}
            />
            <label>Start Date</label>
            <input
              className="block px-4 my-2 h-14 bg-slate-300 w-4/5 rounded-3xl"
              type="date"
              placeholder="Start Date"
              value={startdate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setEditableStartDate(e.target.value);
              }}
            />
            <label>Return Date</label>
            <input
              className="block h-14 px-4 my-2 bg-slate-300 w-4/5 rounded-3xl"
              type="date"
              placeholder="Return Date"
              value={returnDate}
              onChange={(e) => {
                setReturnDate(e.target.value);
                setEditableReturnDate(e.target.value);
              }}
            />
            <button
              className="mx-96 h-14 my-5 bg-blue-500 w-1/3 rounded-2xl"
              type="submit"
            >
              Check
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
