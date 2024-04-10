import React, { useState } from "react";
import { Image } from "react-bootstrap";

function ImagePreview() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imagePreview && <Image src={imagePreview} alt="preview" fluid />}
    </div>
  );
}

export default ImagePreview;
