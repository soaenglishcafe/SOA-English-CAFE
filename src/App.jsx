import SeasonalLayer from "./components/seasonal/SeasonalLayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Newsletter from "./pages/Newsletter";
import Alum from "./pages/Founder";
import Crew from "./pages/Crew";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <SeasonalLayer />
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/alum" element={<Alum />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
