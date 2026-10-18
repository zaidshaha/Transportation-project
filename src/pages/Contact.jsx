
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  }

  return (
    <section className="page">
      <p className="eyebrow">WE'RE HERE TO HELP</p>
      <h1 className="section-title">Contact GoRide</h1>
      <p className="section-subtitle">
        Questions about your journey? Send us a message.
      </p>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Let's talk about your journey.</h2>
          <p>
            We're happy to hear your feedback and help with
            questions about using the GoRide demo website.
          </p>

          <div className="contact-info-item">
            <span>📍</span>
            <div>
              <strong>Our Service</strong>
              <p>Convenient city travel</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>🕒</span>
            <div>
              <strong>Booking Information</strong>
              <p>Explore available ride options online</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span>💬</span>
            <div>
              <strong>Customer Feedback</strong>
              <p>Share your questions and suggestions</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted && (
            <p className="success-message" role="status">
              Thank you! Your message was accepted by the demo form.
            </p>
          )}

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          />

          <button type="submit">Send Message →</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
