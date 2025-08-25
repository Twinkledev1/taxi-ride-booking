import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Book_A_Taxi 🚖</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to ="/booking"> Book Ride</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
