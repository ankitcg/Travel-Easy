import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cars from "./car";

const CarSelector = ({ origin, destination, startdate, returnDate }) => {
  const navigate = useNavigate();
  const handleModify = () => {
    navigate("/journeydate", {
      state: {
        origin: origin,
        destination: destination,
        startdate: startdate,
        returnDate: returnDate,
      },
    });
  };
  return (
    <div>
      <div className="flex border h-14">
        <h1 className="text-xl mx-4 my-2">{origin}</h1>
        <h1 className="text-xl mx-4 my-2">➡</h1>
        <h1 className="text-xl mx-4 my-2">{destination}</h1>
        <h1 className="text-xl mx-4 my-2">{startdate}</h1>
        <h1 className="text-xl mx-4 my-2">➡</h1>
        <h1 className="text-xl mx-4 my-2">{returnDate}</h1>
        <div>
          <button
            className="bg-blue-600 w-24 rounded-xl text-white h-8 mx-4 my-2"
            onClick={handleModify}
          >
            Modify
          </button>
        </div>
      </div>
      <div className="flex border h-20 ">
        <div className="relative w-full lg:max-w-sm my-4">
          <select
            placeholder="Car Type"
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option>SUV</option>
            <option>Sedan</option>
            <option>ALL</option>
          </select>
        </div>
        <div className="relative w-full lg:max-w-sm my-4 ">
          <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>4 Seater</option>
            <option>5 Seater</option>
            <option>8 Seater</option>
          </select>
        </div>
        <div className="relative w-full lg:max-w-sm my-4">
          <select
            placeholder="Car Type"
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          >
            <option>15 Km/ltr</option>
            <option>19 Km/ltr</option>
            <option>22 Km/ltr</option>
          </select>
        </div>
        <div>
          <button className="bg-blue-600 w-24 rounded-xl text-white h-8 mx-4 my-6">
            Modify
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap">
          {cars.map((c, id) => {
            return (
              <div
                key={id}
                className="max-w-xs bg-white my-4 mx-7 rounded-2xl h-64 border"
              >
                <img src={c.img} alt="car" />

                <h1 className="text-sm">{c.person}</h1>
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold mx-1">{c.name}</h1>
                  <h1 className="mx-4 text-green-500">{c.km}</h1>
                </div>
                <div className="flex my-4 justify-between">
                  <Link className="mx-2" to="">
                    Fare Details
                  </Link>
                  <Link
                    className="mx-4 bg-blue-500 rounded-2xl h-6 w-14 text-center"
                    to="/bookingdetails"
                  >
                    Book
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarSelector;
