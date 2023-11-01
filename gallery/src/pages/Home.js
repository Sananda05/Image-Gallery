import React from "react";
import GridComponent from "../components/GridComponent";

//css
import "./Home.css";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="header_container">
        <Navbar />
      </div>
      <div className="body_container">
        <GridComponent />
      </div>
    </>
  );
}

export default Home;
