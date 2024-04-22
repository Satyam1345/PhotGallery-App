import React from "react";
import styles from "../src/AddPhoto.module.css" ;

const Grid = ({ photos }) => {
  return (
    <>
      <h1>Our Gallery</h1>
      <div className={styles.grid}>
        {photos.map(({ photos }) => ( 
          <div key={photos.public_id} className={styles.grid__item}> 
            <img
              src={photos.url} 
              alt="grid_image"
            />
          </div>
        ))}
      </div>
    </>
  );
};
//// Using `photos.public_id`
export default Grid;
