import { Link } from "react-router-dom";

const Services = [
  {
    name: "Bike Ride",
    icon: "🏍️",
    price: 50,
    description:
      "A convenient option for short city journeys and solo travel.",
    features: ["Solo travel", "Short trips", "Budget-friendly"],
  },
  {
    name: "City Cab",
    icon: "🚕",
    price: 150,
    description:
      "A comfortable ride for everyday travel around the city.",
    features: ["Comfortable ride", "City travel", "Luggage space"],
  },
  {
    name: "Family Van",
    icon: "🚐",
    price: 400,
    description:
      "A spacious option for families and group journeys.",
    features: ["Extra space", "Group travel", "Family trips"],
  },
];

export default function Services() {
  return (
    <section className="section services-page">
      <div className="section-heading">
        <p className="tagline">OUR TRANSPORT OPTIONS</p>
        <h1>Choose your ride.</h1>
        <p>
          Find a transportation option that suits your journey.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.name}>
            <div className="service-emoji">{service.icon}</div>

            <h2>{service.name}</h2>
            <p>{service.description}</p>

            <div className="service-price">
              <span>Sample price from</span>
              <strong>₹{service.price}</strong>
            </div>

            <ul>
              {service.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <Link
              to={`/booking?vehicle=${encodeURIComponent(service.name)}`}
              className="primary-button service-button"
            >
              Book This Ride →
            </Link>
          </article>
        ))}
      </div>

      <p className="demo-note">
        Prices are illustrative demo values, not live fare quotes.
      </p>
    </section>
  );
}