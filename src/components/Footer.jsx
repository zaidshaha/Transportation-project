import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <Link to="/" className="logo footer-logo">
            GoRide<span>.</span>
          </Link>
          <p>Your journey, our priority.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GoRide. Transportation demo project.
      </div>
    </footer>
  );
}