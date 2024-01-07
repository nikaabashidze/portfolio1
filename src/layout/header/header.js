import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './header.css';

function App() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="header">
      <button className="side-button" onClick={toggleNav}>
        ☰
      </button>
      <div className="logo"></div>
      <nav className={`nav ${navActive ? 'active' : ''}`}>
        <ul>
        <Link to="/portfolio1">HOME</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/education">EDUCATION</Link>
        <Link to="/contact">CONTACT</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;