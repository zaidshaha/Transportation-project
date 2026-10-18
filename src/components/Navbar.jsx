import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          Go<span>Ride</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Book a Ride</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Link to="/booking" className="btn btn-primary nav-button">
          Book Now
        </Link>
      </div>
    </header>
  );
}

export default Navbar;