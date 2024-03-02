import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <header>
      <nav>
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <article
          className={`hamburger-menu ${open ? "open" : ""}`}
          onClick={handleToggle}
        >
          {open ? <FaTimes /> : <FaBars />}
        </article>
      </nav>
    </header>
  );
};

export default Header;
