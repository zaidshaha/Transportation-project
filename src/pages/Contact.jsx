import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section page-section">
      <div className="container contact-layout">
        <div className="contact-info">
          <span className="eyebrow">CONTACT US</span>
          <h1>We're here to help.</h1>
          <p>
            Have a question about the GoRide demo? Use the contact form to
            try out the interface.
          </p>

          <div className="contact-detail">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>support@goride.example</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>🕒</span>
            <div>
              <strong>Availability</strong>
              <p>Demo website — available online</p>
            </div>
          </div>
        </div>

        <div className="booking-card">
          <h2>Send a message</h2>
          <p className="form-subtitle">
            Enter your details to test the form.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="How can we help?"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-primary full-width">
              Submit Demo Message →
            </button>
          </form>

          {submitted && (
            <div className="success-message" role="status">
              Your demo message was submitted on this page. No email was sent.
            </div>
          )}

          <p className="notice">
            This is a frontend demonstration. Messages are not stored or sent.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;