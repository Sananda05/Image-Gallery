import React from "react";
import GridComponent from "../components/grid-component/GridComponent";

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
        <GridComponent />
      </div>
    </>
  );
}

export default Home;
