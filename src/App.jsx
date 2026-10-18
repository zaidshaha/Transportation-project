import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

export default function App() {
  const [booking, setBooking] = useState(null);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
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
        <Route
          path="*"
          element={
            <section className="section">
              <h1>Page not found</h1>
            </section>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}