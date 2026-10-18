import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section className="section contact-page">
      <div className="section-heading">
        <p className="tagline">WE'RE HERE TO HELP</p>
        <h1>Contact GoRide.</h1>
        <p>
          Have a question or suggestion? Send us a demo message.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-info-card">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>City transportation service demo</p>
            </div>
          </div>

          <div className="contact-info-card">
            <span>✉️</span>
            <div>
              <h3>Email</h3>
              <p>hello@goride.example</p>
            </div>
          </div>

          <div className="contact-info-card">
            <span>🕒</span>
            <div>
              <h3>Availability</h3>
              <p>Website demo available anytime</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="How can we help?"
            required
          />

          <button className="primary-button" type="submit">
            Send Message →
          </button>

          {submitted && (
            <p className="success-message">
              Demo message submitted successfully!
            </p>
          )}

          <p className="demo-note">
            Messages are not sent to a server in this demo.
          </p>
        </form>
      </div>
    </section>
  );
}