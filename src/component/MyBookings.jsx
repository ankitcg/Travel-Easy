import React from "react";
import carImage from "../assets/Toyota-Innova-Crysta-Exterior-123836@2x.png";

const MyBookings = ({ origin, destination, startdate, returndate }) => {
  return (
    <div className="flex border my-20 mx-20 ">
      {/* <h1 className='font-bold text-2xl mx-10 my-4'>My Bookings</h1> */}
      <div className="w-72 border-r-2">
        <img src={carImage} alt="car" />
      </div>
      <div className="mx-4 border-r-2 ">
        <h1 className="text-lg font-bold mx-4 my-3">Totota Innova</h1>
        <h1 className="mx-4 my-2">MH 15 AG 0001</h1>
        <h1 className="mx-4">Car Details</h1>
      </div>
      <div className="flex border-r-2">
        <div className="my-2">
          <h1>Origin :</h1>
          <h1>Destination :</h1>
          <h1>Start Date :</h1>
          <h1>Return Date :</h1>
        </div>
        <div className="my-2 mx-4">
          <h1 className="text-base font-bold">{origin}</h1>
          <h1 className="text-base font-bold">{destination}</h1>
          <h1 className="text-base font-bold">{startdate}</h1>
          <h1 className="text-base font-bold">{returndate}</h1>
        </div>
      </div>
      <div className="flex border-r-2">
        <div className="my-3 mx-2">
          <h1 className="my-2">Booking ID :</h1>
          <h1>Booking Date :</h1>
          <h1 className="my-3">Booking Time :</h1>
        </div>
        <div className="my-2 mx-4">
          <h1 className="text-lg font-bold my-2">ACG001</h1>
          <h1 className="text-lg font-bold">{startdate}</h1>
          <h1 className="text-lg font-bold my-2">
            {new Date().toLocaleTimeString()}
          </h1>
        </div>
      </div>
      <div className="flex ">
        <div className="mx-10 my-6">
          <button className="bg-blue-500 rounded-3xl h-14 w-28">Edit</button>
        </div>
        <div className="mx-2 my-6">
          <button className="bg-blue-500 h-14 w-28 rounded-3xl">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
