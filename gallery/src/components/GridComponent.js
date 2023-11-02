import React from "react";
import { useState, useContext, useEffect, useRef } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//css file
import "./GridComponent.css";

//icon
import deleteIcon from "../assets/icons/delete.png";

// component
import ImageCard from "./ImageCard";
import { ImageContext } from "../context/ImageContext";
import Spinkit from "../components/Spinkit";

function GridComponent() {
  const [items, setItems] = useContext(ImageContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const imgPickerRef = useRef();

  // add image with fab button

  const ImgHandler = () => {
    imgPickerRef.current.click();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl);
      // Update the images array with the new image
      setItems((prevImages) => [
        ...prevImages,
        { id: items.length + 1, name: imageUrl },
      ]);
    }
  };

  //delete image
  const handleDeleteItem = () => {
    console.log(selectedItems);

    let filterItems = items.filter((item) => {
      console.log(item.id);
      return !selectedItems.includes(item.id);
    });

    console.log(filterItems);

    setItems([...filterItems]);

    setSelectedItems([]);
    console.log(items);
  };

  // selected images

  const handleSelect = (e) => {
    const { value } = e.target;
    console.log(value);

    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(Number(value))) {
        // If already selected, remove from the array
        return prevSelectedItems.filter((id) => id !== Number(value));
      } else {
        // If not selected, add to the array
        return [...prevSelectedItems, Number(value)];
      }
    });

    console.log(selectedItems);
  };

  //drag and drop

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...items];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setItems(updatedImages);
  };

  return (
    <div className="grid">
      {isLoading && <Spinkit />}
      {selectedItems.length > 0 ? (
        <div className="delete_item_non_empty">
          <div className="delete_item_text">
            <input
              type="checkbox"
              checked="true"
              style={{ height: "15px", width: "15px" }}
            />
            <h4>{selectedItems.length} Selected</h4>
          </div>
          <img src={deleteIcon} alt="delete icon" onClick={handleDeleteItem} />
        </div>
      ) : (
        <div className="delete_item_empty">
          <h4>{selectedItems.length} Selected</h4>
        </div>
      )}
      <DndProvider backend={HTML5Backend}>
        <div className="grid_container">
          {items.map((img, index) => (
            <ImageCard
              value={img.id}
              onChange={handleSelect}
              key={img.id}
              index={index}
              image={img.name}
              moveImage={moveImage}
            />
          ))}
        </div>
      </DndProvider>
      <input
        type="file"
        ref={imgPickerRef}
        onChange={handleImageUpload}
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
      />
      <button className="fab" onClick={ImgHandler}>
        +
      </button>
    </div>
  );
}

export default GridComponent;
