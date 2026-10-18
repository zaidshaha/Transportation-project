import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">YOUR CITY. YOUR RIDE.</span>

            <h1>
              Every journey.
              <br />
              <span>Made easier.</span>
            </h1>

            <p>
              Book a comfortable, affordable ride for your everyday
              journeys. GoRide helps make getting around simple.
            </p>

            <div className="hero-actions">
              <Link to="/booking" className="btn btn-primary">
                Book Your Ride →
              </Link>

              <Link to="/services" className="btn btn-light">
                Explore Services
              </Link>
            </div>

            <div className="hero-note">
              <span>✓</span> Simple booking
              <span>✓</span> Clear pricing
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-circle"></div>
            <div className="hero-car">🚕</div>
            <div className="floating-card">
              <span className="status-dot"></span>
              <div>
                <strong>Your ride, your way</strong>
                <p>Choose a vehicle that suits you</p>
              </div>
            </div>
            <div className="hero-label">GoRide • Let's go!</div>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHY GORIDE?</span>
            <h2>Travel without the hassle</h2>
            <p>A simpler way to plan your next journey.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Easy Booking</h3>
              <p>Enter your journey details and select your ride.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">₹</div>
              <h3>Clear Prices</h3>
              <p>See the listed demo fare before submitting your booking.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🚘</div>
              <h3>Ride Options</h3>
              <p>Choose a bike, city cab, or family van.</p>
            </article>
          </div>

          <div className="home-cta">
            <div>
              <h2>Ready for your next journey?</h2>
              <p>Choose your ride and enter your trip details.</p>
            </div>
            <Link to="/booking" className="btn btn-primary">
              Get Started →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;