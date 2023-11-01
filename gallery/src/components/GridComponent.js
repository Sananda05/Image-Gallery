import React from "react";
import { useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

//css file
import "./GridComponent.css";

// images
import image11 from "../assets/images/image-1.webp";
import image2 from "../assets/images/image-2.webp";
import image3 from "../assets/images/image-3.webp";
import image4 from "../assets/images/image-4.webp";
import image5 from "../assets/images/image-5.webp";
import image6 from "../assets/images/image-6.webp";
import image7 from "../assets/images/image-7.webp";
import image8 from "../assets/images/image-8.webp";
import image9 from "../assets/images/image-9.webp";
import image10 from "../assets/images/image-10.jpeg";
import image1 from "../assets/images/image-11.jpeg";

//icon
import deleteIcon from "../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg";

// component
import ImageCard from "./ImageCard";

function GridComponent() {
  const imageArray = [
    {
      id: 0,
      name: image1,
    },
    {
      id: 1,
      name: image2,
    },
    {
      id: 2,
      name: image3,
    },
    {
      id: 3,
      name: image4,
    },
    {
      id: 4,
      name: image5,
    },
    {
      id: 5,
      name: image6,
    },
    {
      id: 6,
      name: image7,
    },
    {
      id: 7,
      name: image8,
    },
    {
      id: 8,
      name: image9,
    },
    {
      id: 9,
      name: image10,
    },
    {
      id: 10,
      name: image11,
    },
  ];

  const [items, setItems] = useState(imageArray);
  const [selectedItems, setSelectedItems] = useState([]);

  let temporarySelectedItem = [...selectedItems];

  //delete image

  const handleDeleteItem = () => {
    console.log(selectedItems);
    // selectedItems.map((item) => {
    //   items.splice(item, 1);
    //   // setIsChecked(!isChecked);
    // });

    console.log(temporarySelectedItem);

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

    // if (temporarySelectedItem.includes(Number(value))) {
    //   // If already selected, remove from the array
    //   temporarySelectedItem = temporarySelectedItem.filter(
    //     (id) => id != Number(value)
    //   );
    // } else {
    //   // If not selected, add to the array
    //   temporarySelectedItem = [...temporarySelectedItem, Number(value)];
    // }

    // setIsChecked(!isChecked);

    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(Number(value))) {
        // If already selected, remove from the array
        return prevSelectedItems.filter((id) => id !== Number(value));
      } else {
        // If not selected, add to the array
        return [...prevSelectedItems, Number(value)];
      }
    });

    // setSelectedItems([...temporarySelectedItem]);
    console.log(selectedItems);
    // console.log(temporarySelectedItem);
  };

  //drag and drop

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...items];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setItems(updatedImages);
  };

  // const handleCheckboxChange = (e) => {
  //   const { value } = e.target;
  //   console.log(selectedItems);
  //   // if (selectedItems.includes(value)) {
  //   //   setSelectedItems(selectedItems.splice(value, 1));
  //   // } else {
  //   //   setSelectedItems(selectedItems.push(value));
  //   // }
  //   console.log(selectedItems);
  // };

  return (
    <div className="grid">
      {selectedItems.length > 0 ? (
        <div className="delete_item_non_empty">
          <h4>{selectedItems.length} Item Selected</h4>
          <img src={deleteIcon} alt="delete icon" onClick={handleDeleteItem} />
        </div>
      ) : (
        <div className="delete_item_empty">
          <h4>{selectedItems.length} Item Selected</h4>
        </div>
      )}
      <DndProvider backend={HTML5Backend}>
        <div className="grid_container">
          {items.map((img, index) => (
            <div className="grid-item" key={img.id}>
              <input
                type="checkbox"
                id={img.id}
                value={img.id}
                onChange={handleSelect}
                // checked={isChecked}
                className="img_checkbox"
              />
              <ImageCard
                key={img.id}
                index={index}
                image={img.name}
                moveImage={moveImage}
              />
            </div>
          ))}
        </div>
      </DndProvider>
    </div>
  );
}

export default GridComponent;
