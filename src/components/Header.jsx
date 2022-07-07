import React from "react";
import { Input, Box, HStack, VStack } from '@chakra-ui/react'
import ThemeButton from "./ThemeButton";

const Header = ({ handleSearchChange }) => {
    return (
        <div>
            <VStack alignContent={"center"} justifyContent="center" py={4}>
                <img src="src/assets/images/logo.png" height="100px" />
                <Box maxW="1280px">
                    <HStack spacing={5} align="center" p={4}>
                        <Input placeholder='Search a dog breed :)' size='md' onChange={event => handleSearchChange(event.target.value)} />
                        <ThemeButton />
                    </HStack>
                </Box>
            </VStack>
        </div>
    )
}

export default Header;