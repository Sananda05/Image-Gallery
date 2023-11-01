import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";

//css
import "./GridComponent.css";

function ImageCard({ index, image, moveImage }) {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: { index },
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

  return (
    <div ref={(node) => ref(drop(node))}>
      <img className="Card_Image" src={image} key={index} alt="Img" />
    </div>
  );
}

export default ImageCard;
