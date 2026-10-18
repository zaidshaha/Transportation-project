import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">YOUR JOURNEY STARTS HERE</p>

          <h1>
            Travel smarter.
            <br />
            <span>Travel with GoRide.</span>
          </h1>

          <p className="hero-description">
            Comfortable rides, affordable prices, and
            convenient transportation for your everyday
            journeys.
          </p>

          <div className="hero-buttons">
            <Link to="/booking" className="primary-button">
              Book Your Ride →
            </Link>

            <Link to="/services" className="secondary-button">
              Explore Services
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>3</h3>
              <p>Ride options</p>
            </div>
            <div>
              <h3>Easy</h3>
              <p>Booking process</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Demo access</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-circle">
            <div className="hero-emoji">🚘</div>
          </div>

          <div className="hero-card">
            <span>🚗</span>
            <div>
              <strong>Your ride awaits</strong>
              <p>Plan your next journey</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="section-heading">
          <p className="tagline">WHY CHOOSE GORIDE?</p>
          <h2>Transportation made simple.</h2>
          <p>
            Choose a convenient ride for your next trip.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Quick Booking</h3>
            <p>
              Enter your journey details and submit a
              booking in a few simple steps.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Affordable Options</h3>
            <p>
              Compare three sample transportation options
              for different travel needs.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">🛣️</div>
            <h3>Travel Your Way</h3>
            <p>
              Choose a bike, city cab, or family van
              for your planned journey.
            </p>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready for your next journey?</h2>
        <p>Start planning your ride with GoRide.</p>
        <Link to="/booking" className="primary-button">
          Get Started →
        </Link>
      </section>
    </>
  );
}