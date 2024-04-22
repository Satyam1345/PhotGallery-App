import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import styles from "../src/AddButton.module.css";
const AddButton = ({ setUpdateUI }) => {
  const handleChange = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photos", e.target.files[0]);

    try {
      const response = await fetch("http://localhost:5000/upload/post", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("response was not ok");
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <>
  
     <div className={styles.des}>
     <label className={`button ${styles.des}`} htmlFor="file_picker">
      <AiFillPlusCircle />
      <input
        hidden
        type="file"
        name="photos"
        id="file_picker"
        onChange={(e) => handleChange(e)}
      />
    </label> 
     </div>
     
  </>
};


export default AddButton;
