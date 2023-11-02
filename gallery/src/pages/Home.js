import React from "react";
import GalleryComponent from "../components/gallery-component/GalleryComponent";

//css
import "./Home.css";
import Navbar from "../../src/components/navbar-component/Navbar";

function Home() {
  return (
    <>
      <div className="header_container">
        <Navbar />
      </div>
      <div className="body_container">
        <GalleryComponent />
      </div>
    </>
  );
}

export default Home;
