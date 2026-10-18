
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Go<span>Ride</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/booking">Book a Ride</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link to="/services" className="nav-button">
        Book Now
      </Link>
    </header>
  );
}

export default Navbar;
