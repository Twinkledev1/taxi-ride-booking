import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const goToBooking = () => navigate("/booking");

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Your Ride, Just a Click Away!</h1>
          <p>Reliable, affordable, and safe taxis available anytime.</p>
          <button className="btn" onClick={goToBooking}>Book Now</button>
        
        </div>
        <div className="hero-img">
          <img src="/taxi-hero.png" alt="Taxi illustration" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services">
        <h2>Our Services</h2>
        <div className="cards">
          <article className="card">
            <h3>City Rides</h3>
            <p>Quick and budget-friendly rides inside the city.</p>
          </article>
          <article className="card">
            <h3>Airport Pickup</h3>
            <p>On-time pickups and drop-offs for all major airports.</p>
          </article>
          <article className="card">
            <h3>Outstation</h3>
            <p>Comfortable, safe cars for long-distance trips.</p>
          </article>
        </div>
        <Link className="link" to="/services">See all services →</Link>
      </section>

      {/* About Preview */}
      <section className="section about">
        <h2>About Us</h2>
        <p>
          We keep travel simple: trusted drivers, clean cars, and transparent prices.
          Serving thousands of happy riders since 2025.
        </p>
        <Link className="link" to="/about">Read more →</Link>
      </section>

      {/* Contact Preview */}
      <section className="section contact-preview">
        <h2>Quick Contact</h2>
        <p>Have questions? Ping us and we’ll get back fast.</p>
        <Link className="btn-outline" to="/contact">Contact Us</Link>
      </section>
    </div>
  );
}
