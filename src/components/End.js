import { Box,Icon,Text, Link,useColorModeValue} from "@chakra-ui/react";
import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {FaSpotify,FaFacebookSquare} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";

function End(){
    const color = useColorModeValue('white','blackAlpha.400');
     return (
        <Box
        bg={color}
        h='25vh'
        textAlign='center'
        p={10}
        borderTop='1px'
        borderColor='gray'
        >
            <Icon as={AiFillGithub} m={1}/>
            <Icon as={FaSpotify} m={1}/>
            <Icon as={FaFacebookSquare} m={1}/>
            <Icon as={GrInstagram} m={1}/>
            <Text>Designed and developed by Ryan Le.</Text>
            <Text>Hosted on Vercel. Built with <strong><Link href="https://chakra-ui.com/" color='teal.200'>Chakra UI </Link></strong>components.</Text>
        </Box>
     )
}

export default End;