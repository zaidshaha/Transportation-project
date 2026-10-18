
import { useState } from "react";
import { Link } from "react-router-dom";

function Booking({ booking, setBooking }) {
  const [confirmation, setConfirmation] = useState(null);

  const formData = booking || {
    name: "",
    pickup: "",
    destination: "",
    vehicle: "Bike Ride",
    price: 50,
  };

  function handleChange(event) {
    const { name, value } = event.target;

    const prices = {
      "Bike Ride": 50,
      "City Cab": 150,
      "Family Van": 400,
    };

    setBooking({
      ...formData,
      [name]: value,
      ...(name === "vehicle" ? { price: prices[value] } : {}),
    });

    setConfirmation(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setConfirmation({
      ...formData,
      bookingId: "GR" + Date.now().toString().slice(-6),
    });
  }

  if (confirmation) {
    return (
      <section className="page">
        <div className="confirmation-card">
          <div className="confirmation-icon">✓</div>
          <p className="eyebrow">BOOKING RECEIVED</p>
          <h1 className="section-title">Thank you, {confirmation.name}!</h1>

          <p className="section-subtitle">
            Your demo booking has been recorded on this page.
            No actual vehicle has been dispatched.
          </p>

          <div className="confirmation-details">
            <p><span>Booking reference</span><strong>{confirmation.bookingId}</strong></p>
            <p><span>Ride</span><strong>{confirmation.vehicle}</strong></p>
            <p><span>Pickup</span><strong>{confirmation.pickup}</strong></p>
            <p><span>Destination</span><strong>{confirmation.destination}</strong></p>
            <p><span>Displayed fare</span><strong>₹{confirmation.price}</strong></p>
          </div>

          <Link to="/" className="shop-button">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <p className="eyebrow">LET'S GET YOU MOVING</p>
      <h1 className="section-title">Book Your Ride</h1>
      <p className="section-subtitle">
        Enter your journey details to create a demo booking.
      </p>

      <form className="contact-form booking-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Passenger Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="pickup">Pickup Location</label>
        <input
          id="pickup"
          name="pickup"
          value={formData.pickup}
          onChange={handleChange}
          placeholder="Where should we pick you up?"
          required
        />

        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          placeholder="Where would you like to go?"
          required
        />

        <label htmlFor="vehicle">Choose Your Ride</label>
        <select
          id="vehicle"
          name="vehicle"
          value={formData.vehicle}
          onChange={handleChange}
        >
          <option value="Bike Ride">Bike Ride — ₹50</option>
          <option value="City Cab">City Cab — ₹150</option>
          <option value="Family Van">Family Van — ₹400</option>
        </select>

        <div className="fare-summary">
          <span>Displayed demo fare</span>
          <strong>₹{formData.price}</strong>
        </div>

        <button type="submit">Confirm Demo Booking →</button>
      </form>
    </section>
  );
}

export default Booking;
