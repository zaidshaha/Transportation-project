import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <Link to="/" className="logo footer-logo">
            Go<span>Ride</span>
          </Link>
          <p>Your journey, our responsibility.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/booking">Book a Ride</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} GoRide. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;