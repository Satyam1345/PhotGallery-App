import React, { useState, useEffect } from 'react';
import AddButton from "./AddButton";
import Grid from "./AddPhoto"; 
import Navbar from "./Navbar";

function NewPage (){
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch("http://localhost:5000/upload/get", {
                    method: "GET",
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                setPhotos(data);
                console.log(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchPhotos();

        // Automatically fetch photos every 10 seconds
        const intervalId = setInterval(fetchPhotos, 10000);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to trigger effect only once on mount

    return (
        <>
            <Navbar/> ;
            {/* <Navbar /> */}
            <Grid photos={photos} />
            <AddButton /> {/* No need to pass setUpdateUI */}
        </>
    );
}

export default NewPage;
