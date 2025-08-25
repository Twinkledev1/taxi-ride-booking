import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="section">
      <h2>Services</h2>
      <div className="cards">
        <article className="card">
          <h3>City Rides</h3>
          <p>Door-to-door convenience within city limits.</p>
        </article>
        <article className="card">
          <h3>Airport Pickup</h3>
          <p>Flight-tracking and on-time pickups for a smooth start.</p>
        </article>
        <article className="card">
          <h3>Outstation</h3>
          <p>Comfortable long-distance travel with verified drivers.</p>
        </article>
      </div>
      <Link className="btn" to="/booking">Book a Ride</Link>
    </section>
  );
}
