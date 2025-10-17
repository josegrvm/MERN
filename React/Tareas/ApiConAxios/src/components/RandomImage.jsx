import React, { useState, useEffect } from "react";
import axios from "axios";

const RandomImage = () => {
    const [imageUrl, setImageUrl] = useState("");

    const fetchRandomImage = async () => {
        try {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        setImageUrl(response.request.responseURL);
        } catch (error) {
        console.error("Error al obtener imagen:", error);
        }
    };

    useEffect(() => {
        fetchRandomImage();
    }, []);

    return (
        <div className="image-container">
        {imageUrl && <img src={imageUrl} alt="Random" className="image" />}
        <button className="btn" onClick={fetchRandomImage}>
            Fetch New Random Image
        </button>
        </div>
    );
};

export default RandomImage;