
const services = [
  {
    id: 1,
    name: "Bike Ride",
    price: 50,
    icon: "🏍️",
    description: "A quick and convenient option for solo city travel.",
    features: ["Best for one passenger", "Quick city journeys", "Budget-friendly"],
  },
  {
    id: 2,
    name: "City Cab",
    price: 150,
    icon: "🚕",
    description: "A comfortable ride for everyday travel around the city.",
    features: ["Comfortable seating", "Daily city travel", "Convenient journeys"],
  },
  {
    id: 3,
    name: "Family Van",
    price: 400,
    icon: "🚐",
    description: "Extra room for family outings and group journeys.",
    features: ["More passenger space", "Family outings", "Group travel"],
  },
];

function Services({ onBook }) {
  return (
    <section className="page">
      <p className="eyebrow">OUR RIDE OPTIONS</p>
      <h1 className="section-title">Choose Your Ride</h1>
      <p className="section-subtitle">
        Find the right ride for your next destination.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>

            <h2>{service.name}</h2>
            <p className="service-description">{service.description}</p>

            <ul>
              {service.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <div className="service-bottom">
              <div>
                <span className="price-label">Starting price</span>
                <strong className="service-price">₹{service.price}</strong>
              </div>

              <button
                className="shop-button"
                onClick={() => onBook(service)}
              >
                Select Ride →
              </button>
            </div>
          </article>
        ))}
      </div>

      <p className="pricing-note">
        Prices shown are demonstration prices for this project.
        Actual fares may vary by distance and other factors.
      </p>
    </section>
  );
}

export default Services;
