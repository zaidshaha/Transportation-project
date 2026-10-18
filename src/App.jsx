import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Booking from "./pages/Booking.jsx";
import Contact from "./pages/Contact.jsx";

import "./App.css";

function App() {
  const [selectedRide, setSelectedRide] = useState(null);

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/services"
            element={<Services onBook={setSelectedRide} />}
          />

          <Route
            path="/booking"
            element={
              <Booking
                selectedRide={selectedRide}
                setSelectedRide={setSelectedRide}
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