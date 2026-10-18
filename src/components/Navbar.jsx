import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          GoRide<span>.</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <NavLink to="/booking" className="nav-button">
          Book a Ride
        </NavLink>
      </div>
    </nav>
  );
}