export const ImgHandler = (imgPickerRef) => {
  imgPickerRef.current.click();
};

export const handleImageUpload = (e, setItems, items) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    if (items.length === 0) {
      setItems([{ id: 0, name: imageUrl }]);
    } else
      setItems((prevImages) => {
        let lastElement = items[items.length - 1];

        return [...prevImages, { id: lastElement.id + 1, name: imageUrl }];
      });
  }
};
