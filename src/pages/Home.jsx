
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">YOUR JOURNEY STARTS HERE</span>

          <h1>
            Every journey.
            <br />
            <span>Made easier.</span>
          </h1>

          <p>
            Book your next ride with GoRide. From quick city
            trips to comfortable family journeys, getting
            there has never been easier.
          </p>

          <div className="hero-actions">
            <Link to="/services" className="shop-button">
              Explore Rides →
            </Link>

            <Link to="/contact" className="secondary-link">
              Contact Us
            </Link>
          </div>

          <div className="hero-features">
            <span>✓ Easy Booking</span>
            <span>✓ Comfortable Rides</span>
            <span>✓ Transparent Prices</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>
          <div className="hero-car">🚘</div>

          <div className="floating-card card-top">
            <span>📍</span>
            <div>
              <strong>Your destination</strong>
              <p>Just a ride away</p>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span>✓</span>
            <div>
              <strong>Simple booking</strong>
              <p>Plan your next journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="page">
        <p className="eyebrow">WHY GORIDE?</p>
        <h2 className="section-title">Travel your way</h2>
        <p className="section-subtitle">
          Choose a ride that fits your journey and your budget.
        </p>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Easy Booking</h3>
            <p>Choose your ride and enter your journey details in minutes.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Comfortable Travel</h3>
            <p>Find a travel option that suits your everyday needs.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Clear Pricing</h3>
            <p>See the displayed ride price before submitting your booking.</p>
          </article>
        </div>

        <div className="home-cta">
          <div>
            <h2>Where would you like to go?</h2>
            <p>Your next journey begins with a simple booking.</p>
          </div>
          <Link to="/services" className="shop-button">
            Book Your Ride →
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
