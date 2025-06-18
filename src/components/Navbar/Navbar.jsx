import React, { useState } from "react";
import "../Navbar/Navbar.module.style.css";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [openEsports, setOpenEsports] = useState(false);
  const [openCreators, setOpenCreators] = useState(false);

  return (
    <nav className="navbar">
    <img src={logo} alt="logo" className="logo" />
      <div className="navbar-left">
        <a href="#">Purchase</a>
        <a href="#">Prep Room</a>
        <a href="#">Heroes</a>
        <a href="#">Features</a>
        <a href="#">News</a>

        <div className="dropdown"
          onMouseEnter={() => setOpenEsports(true)}
          onMouseLeave={() => setOpenEsports(false)}
        >
          <a href="#">Esports ᐁ</a>
          {openEsports && (
            <div className="dropdown-content">
              <a href="#">Overview</a>
              <a href="#">Schedule</a>
              <a href="#">Clan Rank</a>
              <a href="#">Third Party</a>
            </div>
          )}
        </div>

        <div className="dropdown"
          onMouseEnter={() => setOpenCreators(true)}
          onMouseLeave={() => setOpenCreators(false)}
        >
          <a href="#">Creators ᐁ</a>
          {openCreators && (
            <div className="dropdown-content">
              <a href="#">Creator Zone</a>
              <a href="#">Cash Reward Event</a>
              <a href="#">Content Creation S2</a>
              <a href="#">Content Creation S1</a>
              <a href="#">Global Launch Challenge</a>
            </div>
          )}
        </div>

      </div>

      <div className="navbar-right">
        <button className="play-btn">Play Now</button>
      </div>
    </nav>
  );
};

export default Navbar;