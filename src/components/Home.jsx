import React, { useState } from "react";
import DogInfo from "./DogInfo";
import { SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import StickySection from "./StickySection";

const Home = ({ breeds, search }) => {
    const [sideImage, setSideImage] = useState("");
    const [currentBreed, setcurrentBreed] = useState("");

    const handleClick = (src, breed) => {
        setSideImage(src);
        setcurrentBreed(breed);
    }

    // Aplica los filtros de búsqueda

    const breedArray = Object.entries(breeds);
    const searchedBreeds = breedArray.filter(([key, value]) => key.includes(search));

    // Usado para desactivar las animaciones en dispositivos móviles
    const isMobile = window.innerWidth < 768;

    const dogs = searchedBreeds.map((breed) => {
        return (
            <DogInfo key={breed[0]} breed={breed[0]} handleClick={handleClick} />
        )
    });

    if (sideImage == "") {
        if (!isMobile) {
            return (
                <motion.div
                    initial={{ x: -300, opacity: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {dogs}
                </motion.div>
            )
        }     
        else {
            return (
                <div>
                    {dogs}
                </div>
            )
        }
    }

    else {
        return (
            <SimpleGrid columns={[1, null, 2]} spacing='40px'>

                {
                    isMobile ? (
                        <div>{dogs}</div>
                    ) : 
                        (<motion.div
                            initial={{ x: 300, opacity: 1 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {dogs}
                        </motion.div>)
                }

                {
                    isMobile ? (
                        <div><StickySection handleClick={handleClick} sideImage={sideImage} breed={currentBreed}/></div>
                    ) :
                        (<motion.div
                            initial={{ y: 300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <StickySection handleClick={handleClick} sideImage={sideImage} breed={currentBreed}/>
                        </motion.div>)
                }
            </SimpleGrid>
        )
    }
}

export default Home;