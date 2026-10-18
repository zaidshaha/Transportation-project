
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Link to="/" className="footer-logo">
            Go<span>Ride</span>
          </Link>
          <p>
            Your journey, our responsibility.
            Safe, comfortable and reliable rides for everyone.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/booking">Book a Ride</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <p>Need a ride? We're here to help.</p>
          <Link to="/contact">Contact GoRide →</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GoRide. All rights reserved.</p>
        <p>Made for better journeys.</p>
      </div>
    </footer>
  );
}

export default Footer;
