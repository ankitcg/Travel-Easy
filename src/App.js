import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Register from "./component/Register";
import DateSelector from "./component/DateSelector";
import AdminLogin from "./component/AdminLogin";
import CarSelector from "./component/CarSelector";
import { useState } from "react";
import BookingDetails from "./component/BookingDetails";
import AddCars from "./component/AddCars";
import CarDetails from "./component/CarDetails";
import EditCarDetails from "./component/EditCarDetails";
import MyBookings from "./component/MyBookings";

function App() {
  const isAuthenticated = () => {
    // Check if the user token is present in local storage
    const token = localStorage.getItem("token");
    return !!token; // Return true if token is present, false otherwise
  };
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startdate, setStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [returnDate, setReturnDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route path="/admin" element={<AdminLogin />}></Route>
        {isAuthenticated() ? (
          <>
            <Route
              path="/journeydate"
              element={
                <DateSelector
                  origin={origin}
                  destination={destination}
                  startdate={startdate}
                  returnDate={returnDate}
                  setOrigin={setOrigin}
                  setDestination={setDestination}
                  setStartDate={setStartDate}
                  setReturnDate={setReturnDate}
                />
              }
            />
            <Route
              path="/selectcar"
              element={
                <CarSelector
                  origin={origin}
                  destination={destination}
                  startdate={startdate}
                  returnDate={returnDate}
                  setOrigin={setOrigin}
                  setDestination={setDestination}
                  setStartDate={setStartDate}
                  setReturnDate={setReturnDate}
                />
              }
            />
            <Route
              path="/bookingdetails"
              element={
                <BookingDetails
                  origin={origin}
                  destination={destination}
                  startdate={startdate}
                  returnDate={returnDate}
                />
              }
            />
            <Route
              path="/mybookings"
              element={
                <MyBookings
                  origin={origin}
                  destination={destination}
                  startdate={startdate}
                  returnDate={returnDate}
                />
              }
            />
          </>
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route path="/addcars" element={<AddCars />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/editcardetails" element={<EditCarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
