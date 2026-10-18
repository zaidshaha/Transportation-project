import { useState } from "react";

const rides = [
  { name: "Bike Ride", price: 50 },
  { name: "City Cab", price: 150 },
  { name: "Family Van", price: 400 },
];

function Booking({ selectedRide, setSelectedRide }) {
  const [form, setForm] = useState({
    name: "",
    pickup: "",
    destination: "",
  });

  const [confirmation, setConfirmation] = useState("");

  const currentRide =
    rides.find((ride) => ride.name === selectedRide?.name) || rides[0];

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setConfirmation("");
  }

  function handleRideChange(event) {
    const ride = rides.find((item) => item.name === event.target.value);

    if (ride) {
      setSelectedRide(ride);
    }

    setConfirmation("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const reference = `GR${Date.now().toString().slice(-6)}`;

    setConfirmation(
      `Demo booking confirmed! Reference: ${reference}. ` +
      `Ride: ${currentRide.name}. Sample fare: ₹${currentRide.price}. ` +
      `No real vehicle has been booked or dispatched.`
    );
  }

  return (
    <section className="section page-section">
      <div className="container booking-layout">
        <div className="booking-intro">
          <span className="eyebrow">BOOK YOUR RIDE</span>
          <h1>Your next journey starts here.</h1>
          <p>
            Enter your details, select a vehicle, and review its sample fare.
          </p>

          <div className="booking-benefit">
            <span>01</span>
            <div>
              <strong>Enter your route</strong>
              <p>Add your pickup and destination.</p>
            </div>
          </div>

          <div className="booking-benefit">
            <span>02</span>
            <div>
              <strong>Select a vehicle</strong>
              <p>Choose the ride that fits your trip.</p>
            </div>
          </div>

          <div className="booking-benefit">
            <span>03</span>
            <div>
              <strong>Review your demo booking</strong>
              <p>See a confirmation on this page.</p>
            </div>
          </div>
        </div>

        <div className="booking-card">
          <h2>Ride details</h2>
          <p className="form-subtitle">Fill in the details below.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="pickup">Pickup location</label>
            <input
              id="pickup"
              name="pickup"
              type="text"
              placeholder="Where should we pick you up?"
              value={form.pickup}
              onChange={handleChange}
              required
            />

            <label htmlFor="destination">Destination</label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="Where are you going?"
              value={form.destination}
              onChange={handleChange}
              required
            />

            <label htmlFor="vehicle">Choose your ride</label>
            <select
              id="vehicle"
              value={currentRide.name}
              onChange={handleRideChange}
            >
              {rides.map((ride) => (
                <option key={ride.name} value={ride.name}>
                  {ride.name} — ₹{ride.price}
                </option>
              ))}
            </select>

            <div className="fare-box">
              <span>Sample fare</span>
              <strong>₹{currentRide.price}</strong>
            </div>

            <button type="submit" className="btn btn-primary full-width">
              Confirm Demo Booking →
            </button>
          </form>

          {confirmation && (
            <div className="success-message" role="status">
              {confirmation}
            </div>
          )}

          <p className="notice">
            Demo only. This form does not send data to a server or book a real
            ride.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Booking;