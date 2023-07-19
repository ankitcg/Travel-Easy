import React from "react";
import cars from "./car";
import { Link, useNavigate } from "react-router-dom";

const AddCars = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cardetails");
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl mx-10 my-4">Hello Admin...</h1>
        <button
          className="font-bold text-xl bg-blue-500 my-6 mx-10 w-32 text-center rounded-3xl"
          onClick={handleClick}
        >
          Add Car
        </button>
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
                    Available Dates
                  </Link>
                  <div className="mx-4  h-6 text-center" to="/bookingdetails">
                    {c.availableDate}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddCars;
