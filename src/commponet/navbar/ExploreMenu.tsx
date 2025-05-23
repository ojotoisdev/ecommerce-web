import { useState } from "react";
import call from "../../assets/call.png";
import a from "../../assets/a.png";
import play from "../../assets/play.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
import react from "../../assets/react.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import './ExploreMenu.modulus.css';

const ExploreMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container">
      {/* === Header Section === */}
      <header className="header">
        <div className="header-menu">
          <div className="header-category">
            <img src={call} alt="Phone Icon" />
            <p>(225) 555-0118</p>
          </div>
          <p>michelle.rivera@example.com</p>
        </div>

        <div className="promo-message">
          <p>Follow Us and get a chance to win 80% off</p>
        </div>

        <div className="header-icon">
          <p>Follow Us :</p>
          <div className="links">
            <a href="#"><img src={a} alt="Instagram" /></a>
            <a href="#"><img src={play} alt="Play" /></a>
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
          </div>
        </div>
      </header>

      {/* === Navbar Section === */}
      <nav className="Navbar">
        <h5>Bandage</h5>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="">Home</a></li>
          <li><select name="" id="">
            <option value="">Shop</option>
          </select></li>
          <li><a href="">About</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Pages</a></li>
        </ul>

        <div className="icon-bar" onClick={toggleMenu}>
          <HiOutlineBars3BottomRight />
        </div>

        <div className="authentication">
          <button>Login / Register</button>
          <div className="icons">
            <img src={search} alt="Search" />
            <img src={cart} alt="Cart" />
            <img src={react} alt="React" />
          </div>
        </div>
      </nav>

      {/* === Furniture Menu Section === */}
      <section className="furniture-items">
        <div className="menu-one">
          <h5>5 items</h5>
          <h1>FURNITURE</h1>
          <button>Read More</button>
        </div>

        <div className="menu-categories">
          <div className="menu-two">
            <h5>5 items</h5>
            <h1>FURNITURE</h1>
            <button>Read More</button>
          </div>

          <div className="items-menu">
            <div className="menu-three">
              <h5>5 items</h5>
              <h1>FURNITURE</h1>
              <button>Read More</button>
            </div>
            <div className="menu-four">
              <h5>5 items</h5>
              <h1>FURNITURE</h1>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreMenu;
