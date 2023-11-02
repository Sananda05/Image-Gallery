import React, { useContext, useRef } from "react";

import { ImageContext } from "../../context/ImageContext";

//icon
import imageIcon from "../../assets/icons/image.png";

import "./Navbar.css";

function Navbar() {
  const imgPickerRef = useRef();
  const [images, setImages] = useContext(ImageContext);

  const ImgHandler = () => {
    imgPickerRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl);
      // Update the images array with the new image
      setImages((prevImages) => [
        ...prevImages,
        { id: images.length + 1, name: imageUrl },
      ]);
    }
  };

  return (
    <div className="header">
      <nav className="navbar">
        <h2 className="navbar_title">Gallery</h2>
        <div className="">
          <input
            type="file"
            ref={imgPickerRef}
            onChange={handleImageUpload}
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
          >
            <img src={imageIcon} alt="Add img icon" />
            <div onClick={ImgHandler}>Add Image</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
