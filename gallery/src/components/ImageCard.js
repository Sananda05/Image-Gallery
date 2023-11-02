import React from "react";
import { useDrag, useDrop } from "react-dnd";

import featuredIcon from "../assets/icons/star.png";

//css
import "./GridComponent.css";

function ImageCard({ index, image, moveImage, value, onChange }) {
  const [{ isDragging }, ref] = useDrag({
    type: "IMAGE",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const itemClass = `grid-item ${isDragging ? "dragging" : ""}`;

  return (
    <div
      className={itemClass}
      key={value}
      ref={(node) => ref(drop(node))}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <input
        type="checkbox"
        id={value}
        value={value}
        onChange={onChange}
        // checked={isChecked}
        className="img_checkbox"
      />
      <img className="Card_Image" src={image} key={index} alt="Img" />
      {index === 0 && (
        <div className="text-container">
          <img src={featuredIcon} alt="Featured icon" />
          <p className="feature-text">Featured photo</p>
        </div>
      )}
    </div>
  );
}

export default ImageCard;
