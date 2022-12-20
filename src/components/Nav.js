import React, { useState } from "react";
import { 
    useColorMode,
    IconButton,
    Flex,
    Text,
    Img,
    Spacer,
    useColorModeValue,
    Button,
    Icon,
    useMediaQuery,
    Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import {FaMoon,FaSun,FaLaptop,FaAlignJustify} from "react-icons/fa"
import {AiFillHome} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {BiCodeAlt} from "react-icons/bi";
import {AtSignIcon} from "@chakra-ui/icons";
const Nav = () =>{
    const {isOpen,onOpen,onClose} = useDisclosure();
    const bg = useColorModeValue('white','gray.700');
    const {colorMode, toggleColorMode} = useColorMode();
    const [media] = useMediaQuery('(min-width: 70em)');
    const [scroll, setScroll] = useState(false);
    const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

    window.addEventListener('scroll', changeScroll);
    return(
        <Flex 
         alignItems='center'
         h='11vh'
         bg={bg}
         boxShadow={scroll ? 'base' : 'none'}
         position="sticky"
         top="0"
         zIndex="sticky"
         w="full"
         borderBottom='1px'
         borderColor='gray'
        >
            <Img src="https://bit.ly/dan-abramov" borderRadius='full' boxSize='50px' m='20px' />
            <Text
             fontWeight='bold'
             fontSize='3xl'
            >
                Tulgaa
            </Text>
            <Spacer/>
        {
            media ? (
                <>
                  <Flex
         alignItems='center'
         gap={3}
      >
                <Link to='/'>
                <Button gap={2} p="1" bg={bg} size="lg">
                     <Icon as={AiFillHome}/>
                     <Text>Home</Text>
                </Button>
                </Link>
                <Link to='about'>
             <Button  gap={2} p="1" bg={bg} size="lg">
                    <Icon as={CgProfile}/>
                    <Text>About</Text>
            </Button>
            </Link>
            <Link to='skills'>
              <Button gap={2} p="1" bg={bg} size="lg">
                    <Icon as={BiCodeAlt}/>
                    <Text>Skills</Text>
              </Button>
            </Link>
            <Link to='projects'>
            <Button gap={2} p="1" bg={bg} size="lg">
                    <Icon as={FaLaptop}/>
                    <Text>Projects</Text>
            </Button>
            </Link>
            <Link to='contact'>
            <Button gap={2} p="1" bg={bg} size="lg">
                    <Icon as={AtSignIcon}/>
                    <Text>Contact</Text>
            </Button> 
            </Link>
      </Flex>
      <Outlet />
            <Spacer/>
            <IconButton onClick={toggleColorMode} m={5} ml={100}>
            {colorMode==='light'?<FaMoon/>:<FaSun/>}
        </IconButton>
                </>
            ) : (
                 <>
                  <IconButton m={5} onClick={onOpen}>
                    <Icon as={FaAlignJustify}/>
                 </IconButton>
                 <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                   <DrawerOverlay />
                   <DrawerContent>
                   <Flex>
                   <CloseButton fontSize="20px" onClick={onClose} m={3}/>
                    <Spacer/>
                        <IconButton onClick={toggleColorMode} m={2}>
                        {colorMode==='light'?<FaMoon/>:<FaSun/>}
                    </IconButton>     
                   </Flex>
                    <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                   <DrawerBody>
                   <Link to='/'>
                <Button gap={2} p="1" bg={bg} size="lg" onClick={onClose}>
                     <Icon as={AiFillHome}/>
                     <Text>Home</Text>
                </Button>
                </Link><br/>
                <Link to='about'>
             <Button  gap={2} p="1" bg={bg} size="lg" onClick={onClose}>
                    <Icon as={CgProfile}/>
                    <Text>About</Text>
            </Button>
            </Link><br/>
            <Link to='skills'>
              <Button gap={2} p="1" bg={bg} size="lg" onClick={onClose}>
                    <Icon as={BiCodeAlt}/>
                    <Text>Skills</Text>
              </Button>
            </Link><br/>
            <Link to='projects'>
            <Button gap={2} p="1" bg={bg} size="lg" onClick={onClose}>
                    <Icon as={FaLaptop}/>
                    <Text>Projects</Text>
            </Button>
            </Link><br/>
            <Link to='contact'>
            <Button gap={2} p="1" bg={bg} size="lg" onClick={onClose}>
                    <Icon as={AtSignIcon}/>
                    <Text>Contact</Text>
            </Button> 
            </Link><br/>
                    </DrawerBody>
                  </DrawerContent>
               </Drawer>
             </>
            )
        }
        </Flex>
    )
}

export default Nav;