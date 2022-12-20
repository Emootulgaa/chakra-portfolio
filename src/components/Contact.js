import React from "react";
import {Box,Container,Text,useMediaQuery, 
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button
} from "@chakra-ui/react";
const Contact = () =>{
    const [media] = useMediaQuery('(min-width: 60em)');
    return(
        <Box>
            <Container maxWidth='container.xl'>        
            <Box py={5} ml={media?'350px':'4'} mr={media?'350':'4'} flexDirection='row' alignItems='center'>
             <Text mt='45px' fontSize='50px' fontWeight='semibold' mb={6}>Let's Talk</Text>
             <Box fontSize='18px'>
             <Text mb={5}>Liking what you see on my website? Looking to hire a short-term developer, or envisioning my work and I fitting in at your company? Shoot me a message and let's have a little chat about it!</Text>
             <Text mb={5}>I'm always available for interesting new work, whether you're in the build phase of your current project or just need a hand in getting started.</Text>
             <Text>Drop a message to me below and let's get this going! 👇🏽</Text>
             </Box>
             <FormControl>
                  <FormLabel>Name *</FormLabel>
                  <Input type='text' placeholder='Email' bg='white' color='black'/>
                  <FormLabel>Email Address *</FormLabel>
                  <Input type='email' placeholder='Email' bg='white' color='black'/>
                  <FormLabel>Subject *</FormLabel>
                  <Input type='text' placeholder='Email' bg='white' color='black'/>
                  <FormLabel>Message *</FormLabel>
                  <Textarea type='text' bg='white'></Textarea>
             </FormControl>
             <Button bg='teal'>Submit</Button>
             </Box>
             </Container>
        </Box>
    )
}

export default Contact;