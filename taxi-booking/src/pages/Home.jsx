function Home() {
    return (
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-text">
            <h2>Your Ride, Just a Click Away!</h2>
            <p>Reliable, affordable, and safe taxis available anytime.</p>
            <button className="btn">Book Now</button>
          </div>
          <div className="hero-img">
            <img src="/taxi-hero.png" alt="Taxi Illustration" />
          </div>
        </section>
  
        {/* Services Preview */}
        <section className="services">
          <h2>Our Services</h2>
          <div className="service-list">
            <div className="service-card">
              <h3>City Rides</h3>
              <p>Quick and affordable rides within the city.</p>
            </div>
            <div className="service-card">
              <h3>Airport Pickup</h3>
              <p>On-time pickups and drop-offs at major airports.</p>
            </div>
            <div className="service-card">
              <h3>Outstation</h3>
              <p>Comfortable taxis for your long-distance travel.</p>
            </div>
          </div>
          <a href="/services" className="link">See all services →</a>
        </section>
  
        {/* About Preview */}
        <section className="about">
          <h2>About Us</h2>
          <p>
            At Book_A_Taxi, we believe every journey should be stress-free. 
            From city commutes to airport transfers, our drivers are trusted, 
            our cars are clean, and our prices are transparent.
          </p>
          <a href="/about" className="link">Read more about us →</a>
        </section>
  
        {/* Contact Preview */}
        <section className="contact">
          <h2>Quick Contact</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send</button>
          </form>
          <a href="/contact" className="link">Go to full contact page →</a>
        </section>
      </div>
    );
  }
  
  export default Home;
  