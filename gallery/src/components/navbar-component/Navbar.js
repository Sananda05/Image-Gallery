import React, { useContext, useRef } from "react";

import { ImageContext } from "../../context/ImageContext";

import { ImgHandler, handleImageUpload } from "../../utils/ImagePicker";

//icon
import imageIcon from "../../assets/icons/image.png";

import "./Navbar.css";

function Navbar() {
  const imgPickerRef = useRef();
  const [images, setImages] = useContext(ImageContext);

  return (
    <div className="header">
      <nav className="navbar">
        <h2 className="navbar_title">Gallery</h2>
        <div className="">
          <input
            type="file"
            ref={imgPickerRef}
            onChange={(e) => {
              handleImageUpload(e, setImages, images);
            }}
            accept=".jpg,.png,.jpeg"
            style={{ display: "none" }}
          />
          <div
            className="navbar_button"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onClick={() => {
              ImgHandler(imgPickerRef);
            }}
          >
            <img src={imageIcon} alt="Add img icon" />
            <div>Add Image</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
