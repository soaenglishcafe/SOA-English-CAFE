import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* LEFT (DESKTOP ONLY) */}
        <ul className="nav-left desktop-only">
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/newsletter">Newsletter</Link></li>
          <li><Link to="/founder">Founder</Link></li>
        </ul>

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="SOA EnglishCafe Logo" />
          </Link>
        </div>

        {/* RIGHT (DESKTOP ONLY) */}
        <ul className="nav-right desktop-only">
          <li><Link to="/crew">Crew</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="menu-toggle mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU (SINGLE LIST) */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
            <Link to="/newsletter" onClick={() => setMenuOpen(false)}>Newsletter</Link>
            <Link to="/founder" onClick={() => setMenuOpen(false)}>Founder</Link>
            <Link to="/crew" onClick={() => setMenuOpen(false)}>Crew</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;
