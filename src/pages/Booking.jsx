import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const vehicles = [
  { name: "Bike Ride", price: 50, icon: "🏍️" },
  { name: "City Cab", price: 150, icon: "🚕" },
  { name: "Family Van", price: 400, icon: "🚐" },
];

export default function Booking({ booking, setBooking }) {
  const [searchParams] = useSearchParams();

  const requestedVehicle = searchParams.get("vehicle");
  const validVehicle = vehicles.some(
    (vehicle) => vehicle.name === requestedVehicle
  );

  const [form, setForm] = useState({
    name: "",
    pickup: "",
    destination: "",
    vehicle: validVehicle ? requestedVehicle : "City Cab",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      form.pickup.trim().toLowerCase() ===
      form.destination.trim().toLowerCase()
    ) {
      window.alert("Pickup and destination must be different.");
      return;
    }

    setBooking({
      name: form.name.trim(),
      pickup: form.pickup.trim(),
      destination: form.destination.trim(),
      vehicle: form.vehicle,
    });
  }

  if (booking) {
    return (
      <section className="section booking-page">
        <div className="confirmation-card">
          <div className="success-icon">✓</div>

          <p className="tagline">BOOKING DEMO</p>
          <h1>Demo Booking Confirmed!</h1>

          <p>
            Thank you, <strong>{booking.name}</strong>.
            Your demo booking details have been recorded
            on this page.
          </p>

          <div className="confirmation-details">
            <div>
              <span>Pickup</span>
              <strong>{booking.pickup}</strong>
            </div>

            <div>
              <span>Destination</span>
              <strong>{booking.destination}</strong>
            </div>

            <div>
              <span>Vehicle</span>
              <strong>{booking.vehicle}</strong>
            </div>
          </div>

          <p className="demo-note">
            This is a demonstration only. No real ride is booked.
          </p>

          <button
            className="primary-button"
            onClick={() => {
              setBooking(null);
              setForm({
                name: "",
                pickup: "",
                destination: "",
                vehicle: "City Cab",
              });
            }}
          >
            Book Another Ride
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="section booking-page">
      <div className="section-heading">
        <p className="tagline">LET'S GET YOU THERE</p>
        <h1>Book your ride.</h1>
        <p>Enter your details to create a demo booking.</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />

        <label htmlFor="pickup">Pickup location</label>
        <input
          id="pickup"
          name="pickup"
          value={form.pickup}
          onChange={handleChange}
          placeholder="Where should we pick you up?"
          required
        />

        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          name="destination"
          value={form.destination}
          onChange={handleChange}
          placeholder="Where are you going?"
          required
        />

        <label htmlFor="vehicle">Choose your vehicle</label>
        <select
          id="vehicle"
          name="vehicle"
          value={form.vehicle}
          onChange={handleChange}
          required
        >
          {vehicles.map((vehicle) => (
            <option key={vehicle.name} value={vehicle.name}>
              {vehicle.icon} {vehicle.name} — ₹{vehicle.price}
            </option>
          ))}
        </select>

        <button type="submit" className="primary-button booking-submit">
          Confirm Demo Booking →
        </button>

        <p className="demo-note">
          No payment is collected and no driver is dispatched.
        </p>
      </form>
    </section>
  );
}