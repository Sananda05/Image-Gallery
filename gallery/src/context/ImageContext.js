import { createContext, useState } from "react";

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

export const ImageContext = createContext();

const ImageContextProvider = (props) => {
  const [Images, setImages] = useState([
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
  ]);

  return (
    <ImageContext.Provider value={[Images, setImages]}>
      {props.children}
    </ImageContext.Provider>
  );
};

export default ImageContextProvider;
