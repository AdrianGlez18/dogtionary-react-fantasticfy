import React, {useEffect, useState} from "react";
import axios from "axios";
import { DogImage, DogImageContainer, DogImagesRow, DogBreed } from "./styledcomponents/DogImage";

const DogInfo = ({ breed, handleClick }) => {

    const [images, setImages] = useState([]);

    const loadImageList = async () => {
        const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`);
        setImages(res.data.message);
    }

    useEffect(() => {
        loadImageList();
    }, [])

    //Usado únicamente al mostrar el nombre en el h3
    const capitalizeFirstLetter = (breed) => {
        return breed.charAt(0).toUpperCase() + breed.slice(1);
    }

    return (
        <div className={breed}>
            <DogBreed>{capitalizeFirstLetter(breed)}</DogBreed>
            <DogImagesRow>
                <DogImageContainer>
                    <DogImage src={images[0]} height={200} width={200} onClick={event => handleClick(images[0], breed)}/>
                </DogImageContainer>
                <DogImageContainer>
                    <DogImage src={images[1]} height={200} width={200} onClick={event => handleClick(images[1], breed)}/>
                </DogImageContainer>
                <DogImageContainer>
                    <DogImage src={images[2]} height={200} width={200} onClick={event => handleClick(images[2], breed)}/>
                </DogImageContainer>
            </DogImagesRow>
        </div>
    )
}

export default DogInfo;