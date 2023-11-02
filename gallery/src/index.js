import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import context
import ImageContextProvider from "./context/ImageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ImageContextProvider>
      <App />
    </ImageContextProvider>
  </React.StrictMode>
);
