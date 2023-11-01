import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <nav className="navbar">
        <h2 className="navbar_title">Gallery</h2>
        <div className="">
          <div>
            <button className="navbar_button">Add Image</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
