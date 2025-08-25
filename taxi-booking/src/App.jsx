import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

function App() {
  return (
      <Routes>
        {/* Wrap Layout around all pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
  );
}

export default App;
