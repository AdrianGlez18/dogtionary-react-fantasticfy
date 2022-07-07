import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import StickyBox from "react-sticky-box";
import { DogImageContainer, DogImagesRow, DogBreed } from "./styledcomponents/DogImage";

const StickySection = ({sideImage, breed, handleClick}) => {

    const capitalizeFirstLetter = (breed) => {
        return breed.charAt(0).toUpperCase() + breed.slice(1);
    }

    return (
        <StickyBox style={{height: "100vh"}}>
            <VStack align="center" spacing={3} justifyContent="center" pt={10}>
                <DogBreed>{capitalizeFirstLetter(breed)}</DogBreed>
                <DogImagesRow>
                    <DogImageContainer>
                        <img src={sideImage} height={500} width={500} />
                    </DogImageContainer>
                </DogImagesRow>
                <Button colorScheme='teal' onClick={event => handleClick("")}>Back to the list</Button>
            </VStack>
        </StickyBox>
    )
}

export default StickySection;