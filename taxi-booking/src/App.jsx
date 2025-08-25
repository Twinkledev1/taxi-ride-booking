import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App(){
  return(
<Router>
      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />    
         </Routes>

      {/* Footer shared on all pages */}
      <footer className="footer">
        <p>© 2025 Book_A_Taxi. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
