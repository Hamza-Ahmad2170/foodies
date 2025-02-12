"use client";
import { useRef, useState } from "react";
import classes from "./css/ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  const handleFileBtnClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (event) => {
      setPickedImage(event.target.result);
    };
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          ) : (
            <p>No image picked yet</p>
          )}
        </div>
        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          className={classes.input}
          ref={imageInputRef}
          onChange={handleImageChange}
          // required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleFileBtnClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
