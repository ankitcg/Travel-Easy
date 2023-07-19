import React from "react";
import carImage from "../assets/Toyota-Innova-Crysta-Exterior-123836@2x.png";
import { useNavigate } from "react-router-dom";

const BookingDetails = ({origin, destination, startdate, returnDate}) => {
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate('/journeydate',{
            state:{
                origin,
                destination,
                startdate,
                returnDate
            }
        })
    }
  return (
    <div className="flex">
      <div className="max-w-full border mx-16 my-20 box-border">
      <h1 className="text-2xl font-semibold mx-4">Booking Details</h1>
      <div className="flex justify-between">
        <div className="flex  my-2 max-w-4xl border-b-2">
          <div className="my-4">
            <h1 className="w-52 h-10 mx-4 my-4">Car Name </h1>
            <h1 className="mx-4">Car Number</h1>
          </div>
          <div className="my-4">
            <h1 className="w-60 my-4">Toyota Innova 6 Seater</h1>
            <h1 className="my-8">MH 15 AG 0001</h1>
          </div>
          <img className="w-60 my-4 mx-10 " src={carImage} alt="car" />
        </div>
      </div>
      <div className="flex  my-5 max-w-4xl border-b-2">
          <div className="my-4">
            <h1 className="w-52 mx-4 my-4 ">Origin</h1>
            <h1 className="mx-4 my-5">Destination</h1>
            <h1 className="mx-4 my-5">Start Date</h1>
            <h1 className="mx-4 my-5">End Date</h1>
          </div>
          <div className="my-4">
            <h1 className="w-60 my-4">{origin}</h1>
            <h1 className="my-4">{destination}</h1>
            <h1 className="my-5">{startdate}</h1>
            <h1 className="my-5">{returnDate}</h1>
          </div>
        </div>
        <div className="flex  my-5 max-w-4xl border-b-2 ">
          <div className="my-4">
            <h1 className="w-52 mx-4 my-4 ">Booking ID</h1>
            <h1 className="mx-4 my-5">Bookin Date</h1>
            <h1 className="mx-4">Booking Time</h1>
          </div>
          <div className="my-4">
            <h1 className="w-60 my-4 ">ACG001</h1>
            <h1 className="my-5">{startdate}</h1>
            <h1 className="my-5">{new Date().toLocaleTimeString()}</h1>
          </div>
        </div>
        <div>
            <button className="bg-blue-600 w-24 rounded-xl text-white h-8 mx-8 my-4" onClick={handleNavigate}>Edit</button>
        </div>
    </div>
    <div className="border my-20 box-border max-w-xl">
    <h1 className="text-2xl font-semibold mx-4">Payment Details</h1>
    <div className="flex justify-between">
        <div className="flex my-2 max-w-2xl border-b-2">
          <div className="my-4 mx-4">
            <h1 className="w-52 h-10 mx-4 my-4">Price per Km</h1>
            <h1 className="mx-4 my-4">Pricing</h1>
            <h1 className="mx-4 my-8">Tax Charges</h1>
          </div>
          <div className="my-4">
            <h1 className="w-60 my-4">20/km</h1>
            <h1 className="my-8">Rs.1500</h1>
            <h1 className="my-8">Rs.50</h1>
          </div>
        </div>
      </div>
      <div className="flex  max-w-2xl border-b-2">
          <div className=" mx-4">
            <h1 className="w-52 h-10 mx-4 my-4 font-semibold">Sub Total</h1>
          </div>
          <div className="my-4">
            <h1 className="w-60 font-semibold text-green-500">Rs.1550</h1>
          </div>
        </div>
        <div className="flex mx-10 my-5">
        <input className="mx-4" type='checkbox'/>
        <h1>Agree To All Terms & Conditions Of TravelEasy</h1>
        </div>
        <button className="w-44 font-semibold h-16 bg-blue-600 mx-52 my-5 rounded-3xl">Proceed</button>
    </div>
    </div>
    
  );
};

export default BookingDetails;
