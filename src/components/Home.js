import { 
    Box,
    Flex,
    Text,
    useMediaQuery,
    Image,
    Link,
    Container,
    Button,
    Icon,
    useColorModeValue,
    Spacer
} from "@chakra-ui/react";
import { FaTools, FaHandshake, FaStar } from 'react-icons/fa';
import React from "react";
import {AiFillGithub} from "react-icons/ai";
import {FaSpotify,FaFacebookSquare} from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import bugant from "./img/bugant.jpg"
const Home = () =>{
    const color = useColorModeValue('gray.700','gray')
    const [media] = useMediaQuery('(min-width: 60em)')
    const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const array = [
    {
      id: 1,
      text: ' Solving world problems through various web applications using efficient programs and tools',
      icon: FaTools,
    },
    {
      id: 2,
      text: 'Through team work, we collaborate and deliver quality projects of high standards',
      icon: FaHandshake,
    },
    {
      id: 3,
      text: 'Five star service with installament plan is readily available',
      icon: FaStar,
    },
    {
        id: 3,
        text: 'Five star service with installament plan is readily available',
        icon: FaStar,
    },
    {
        id: 2,
        text: 'Through team work, we collaborate and deliver quality projects of high standards',
        icon: FaHandshake,
      },
      {
        id: 1,
        text: ' Solving world problems through various web applications using efficient programs and tools',
        icon: FaTools,
      },
]
    return(
    <Box>
        <Container maxWidth='container.xl'>        
    <Box py={5} ml={media?'110':'4'} mr={media?'200':'4'}flexDirection='row' alignItems='center'>    
        <Box mt={{ base: 20, md: 50 }} ml={{ md: 6 }}>
            <Text
                    fontWeight='semibold'
                    fontSize='5xl'
                    letterSpacing='wide'
                    color='teal.300'
                >
                     Hello, I'm ... 
            </Text>
            <Text fontSize='7xl' fontWeight='semibold'>
                    Tulgaa
            </Text>
            <Text mt={1} fontSize='2xl'>
                I'm currently a <span style={{color:'#33d4ff'}}><b>UI Engineer II</b></span> at CrowdStrike, working on all things front-end.
          </Text>
        <Box mt={9} mb={10} color='gray'>
            <Text>
                🚀   Exploring opportunities, side projects, freelancing and more.
                  </Text>
            <Text>
                🎓   University of Nebraska-Lincoln Alumni. Degree in Software Engineering.
                </Text>
            <Text>
                🏙️   Currently based out of New York City.
                 </Text>
            </Box>
           <Text fontSize='3xl' fontWeight='semibold'>
                Connect with me on Social Media!
                </Text>
            <Box>
                    <Button m={2} gap={2}>
                        <Icon as={AiFillGithub}/>
                        Github</Button>
                    <Button m={2} gap={2}>
                        <Icon as={FaSpotify}/>
                        Spotify</Button>
                    <Button m={2} gap={2}>
                        <Icon as={FaFacebookSquare}/>
                        Facebook</Button>
                    <Button m={2} gap={2}>
                        <Icon as={GrInstagram}/>
                        Instagram</Button>
                </Box>
            <Box flexShrink={0} mt={8} mb={5}>
                  <Image
                      borderRadius='lg'
                      width={{ md: 900 }}
                      src={bugant}
                      alt='Woman paying for a purchase'
                   />
               </Box>
        </Box>
        <Box textAlign='center'>
            <Text color='gray' mb={10}>
            Here's me in Bugant, Selenge.<br/> I like to travel.
                </Text>
                <hr/>
            <Box mt={10} mb={10}>
                <Text fontSize='40px' fontWeight='semibold' mb={4}>
                Looking to hire a freelance engineer?
                </Text>
                <Box color='gray' fontSize='18px'>
                <Text mb={4}>
                I have worked on projects of all shapes and sizes in my time in industry and as a freelance web developer. I've helped to build out brand new web projects from the ground up as well as maintained existing suites of applications.
               </Text>
                 <Text mb={4}>
                 In my own time, I've built out a plethora of personal projects that you can view on my <Link color='teal.300'>projects page</Link>, and I'm always on the look out for exciting new opportunities! 
                </Text>
              <Text>
               By the way, I do free consultations. 😉
              </Text>
                </Box>
            </Box>
            <hr/>
        </Box>
        <Box>
        <Text mt={9} fontSize='35px' fontWeight='semibold' mb={4} >Professional References</Text>
        <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThanMD ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
    >
      {array.map((arr) => (
        <>
          <Flex
            height="300px"
            bg="blackAlpha.200"
            width={isLargerThanMD ? '32%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? '5' : '4'}
            border="1px solid #C4DDFF"
            borderColor={color}
          >
            <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
            <Text>{arr.text}</Text>
          </Flex>

          <Spacer />
        </>
      ))}
    </Flex>
        </Box>
        </Box>
          </Container>
    </Box>
    )
}

export default Home;