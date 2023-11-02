import React from "react";
import { useState, useContext, useEffect, useRef } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//css file
import "./GalleryComponent.css";

//icon
import deleteIcon from "../../assets/icons/delete.png";

// component
import ImageCard from "./ImageCard";
import { ImageContext } from "../../context/ImageContext";
import Spinkit from "../spinkit-component/Spinkit";

import { ImgHandler, handleImageUpload } from "../../utils/ImagePicker";

function GalleryComponent() {
  const [items, setItems] = useContext(ImageContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const imgPickerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  //delete image
  const handleDeleteItem = () => {
    let filterItems = items.filter((item) => {
      return !selectedItems.includes(item.id);
    });

    setItems([...filterItems]);

    setSelectedItems([]);
  };

  // selected images
  const handleSelect = (e) => {
    const { value } = e.target;

    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(Number(value))) {
        return prevSelectedItems.filter((id) => id !== Number(value));
      } else {
        return [...prevSelectedItems, Number(value)];
      }
    });
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
        onChange={(e) => handleImageUpload(e, setItems, items)}
        accept=".jpg,.png,.jpeg"
        style={{ display: "none" }}
      />
      <button
        className="fab"
        onClick={() => {
          ImgHandler(imgPickerRef);
        }}
      >
        +
      </button>
    </div>
  );
}

export default GalleryComponent;
