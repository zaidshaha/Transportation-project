
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [booking, setBooking] = useState(null);

  function selectService(service) {
    setBooking({
      name: "",
      pickup: "",
      destination: "",
      vehicle: service.name,
      price: service.price,
    });
  }

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/services"
            element={<Services onBook={selectService} />}
          />

          <Route
            path="/booking"
            element={
              <Booking
                booking={booking}
                setBooking={setBooking}
              />
            }
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
