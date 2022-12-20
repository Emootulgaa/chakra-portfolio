import React from "react";
import {Box,Container,useMediaQuery,Text,Img,Button,Icon, Flex} from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai";
import {FaSpotify,FaFacebookSquare,FaCodeBranch} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import Bi from "./img/minii_zurag.jpg"
const About = () =>{
    const [media] = useMediaQuery('(min-width: 60em)');
    return(
        <Container maxWidth='container.xl'>        
            <Box py={5} ml={media?'11em':'4'} mr={media?'200':'4'} flexDirection='row' alignItems='center'>
            <Box>
            <Text mt='45px' fontSize='50px' fontWeight='semibold' mb={4}>About Me</Text>
                  <Box fontSize='18px'>
                    <Text mb={5}>Hey there! My name is Ryan Le and I am a recent* graduate of the University of Nebraska-Lincoln with a Bachelor of Science degree in Software Engineering - minor in Mathematics.</Text>
                    <Text mb={5}> am a Vietnamese-American front-end developer originally from Sioux Falls, South Dakota. Currently, I am based out of the New York City area. I primarily work with web-based technologies such as React.js, TypeScript, JavaScript, Node.js, and Chakra UI, among other things.</Text>
                    <Text mb={5}> got my start in the world of software engineering at the young age of 11 when I was invited to join Re-Logic as a <span style={{color: '#33d4ff'}}><strong>Beta Tester</strong></span> for the hit indie game, <span style={{color: '#33d4ff'}}><strong>Terraria.</strong></span></Text>
                    <Text mb={10}>Aside from my work as a software engineer, I spend my free time biking around the city, catching up on video game releases from over the years, and traveling the US. It's my personal goal to visit each one of the fifty states, and I'm about halfway there so far.</Text>
                    </Box>
                  <Img borderRadius={10} src={Bi} />
                  <Text color='gray' textAlign='center' mt={4}>
                  Lincoln, Nebraska, 2021
                </Text>
                <Text fontSize='3xl' fontWeight='semibold'>
                     My Social Media!
                </Text>
               <Box mb={50}>
                    <Button m={2} gap={2}>
                        <Icon as={AiFillGithub}/>
                        Github</Button>
                    <Button m={2} gap={2}>
                        <Icon as={FaSpotify}/>
                        Spotify</Button>
                    <Button m={2} gap={2}>
                        <Icon as={FaFacebookSquare}/>
                        Facebook</Button>
                    <Button m={2} gap={2} >
                        <Icon as={GrInstagram}/>
                        Instagram</Button>
                </Box>
            </Box>
                <hr/>
                <Box>
                <Flex mt={50}>
                  <Img src="https://i.imgur.com/tTJbtDa.png" h='200px'/>
                </Flex>
                <Text fontSize='5xl' fontWeight='semibold'>
                Education
                </Text>
                <Text fontSize='3xl' fontWeight='semibold'>
                University of Nebraska-Lincoln
                </Text>
                <Text fontSize='20px'>Bachelor of Science Degree in <span style={{color: '#33d4ff'}}><strong>Software Engineering</strong></span>; Minor in <span style={{color: '#33d4ff'}}><strong>Mathematics.</strong></span></Text>
                <Text fontSize='20px'><span style={{color: '#33d4ff'}}><strong>Cumulative GPA</strong></span>:3.64 / 4.00</Text>
                <Text fontSize='20px'><span style={{color: '#33d4ff'}}><strong>Graduation Date</strong></span>:May 8th, 2021</Text>
                <Text fontSize='3xl' mt={5} mb={4} fontWeight='semibold'>Accomplishments</Text>
                <Box mb={20}>
                       <Text>
                       <Icon as={FaCodeBranch}/> George Beadle Scholar (2017 - 2021)<br/>
                       <Icon as={FaCodeBranch}/> Out of State Student Leader (2018 - 2019)<br/>
                       <Icon as={FaCodeBranch}/> Vice President of Communications for the Engineering Student Advisory Board (2020 - 2021)<br/>
                       <Icon as={FaCodeBranch}/> Named to Deans' List five semesters <br/>
                       <Icon as={FaCodeBranch}/> Grace Hopper Conference Scholar 2020 <br/>
                       <Icon as={FaCodeBranch}/> First Generation College Student <br/>
                       </Text>
                </Box>
                </Box>
            </Box>

        </Container>
    )
}

export default About;