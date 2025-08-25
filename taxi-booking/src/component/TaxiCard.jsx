import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Outlet /> {/* renders the active page */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
