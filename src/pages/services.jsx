import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "Bike Ride",
    price: 50,
    icon: "🏍️",
    description: "An affordable option for quick solo trips around the city.",
    tag: "QUICK TRIPS",
  },
  {
    name: "City Cab",
    price: 150,
    icon: "🚕",
    description: "A comfortable option for everyday city journeys.",
    tag: "EVERYDAY COMFORT",
  },
  {
    name: "Family Van",
    price: 400,
    icon: "🚐",
    description: "Extra space for families, friends, and group travel.",
    tag: "MORE SPACE",
  },
];

function Services({ onBook }) {
  const navigate = useNavigate();

  function chooseRide(service) {
    onBook(service);
    navigate("/booking");
  }

  return (
    <section className="section page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">OUR SERVICES</span>
          <h1>Find your perfect ride</h1>
          <p>Choose the vehicle that works best for your journey.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <span className="service-tag">{service.tag}</span>

              <div className="service-icon">{service.icon}</div>

              <h2>{service.name}</h2>
              <p>{service.description}</p>

              <div className="service-price">
                <strong>₹{service.price}</strong>
                <span>demo fare</span>
              </div>

              <button
                type="button"
                className="btn btn-primary full-width"
                onClick={() => chooseRide(service)}
              >
                Select Ride →
              </button>
            </article>
          ))}
        </div>

        <p className="notice">
          Prices are sample fares for this demonstration, not live quotes.
        </p>
      </div>
    </section>
  );
}

export default Services;