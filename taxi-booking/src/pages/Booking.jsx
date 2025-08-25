function Booking() {
    return (
      <section className="booking">
        <h2>Book Your Ride</h2>
        <form className="booking-form">
          <input type="text" placeholder="Pickup Location" required />
          <input type="text" placeholder="Drop Location" required />
          <input type="date" required />
          <input type="time" required />
          <input type="number" placeholder="Passengers" min="1" max="6" required />
  
          <button type="submit" className="btn">Confirm Booking</button>
        </form>
      </section>
    );
  }
  
  export default Booking;
  