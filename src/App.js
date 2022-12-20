import React,{useRef} from "react";
import {useDisclosure} from "@chakra-ui/react";
import Nav from "./components/Nav";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import End from "./components/End";
import Drawercom from "./components/drawer";
import Test from "./components/Test"
function App(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
  <>
    <BrowserRouter>
         <Nav ref={btnRef} onOpen={onOpen}/>
         <Drawercom isOpen={isOpen} onClose={onClose} btnRef={btnRef}/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path="/projects" element={<Projects/>}/>
           <Route path="/skills" element={<Skills/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/experience" element={<Experience/>}/>
           <Route path="/test" element={<Test/>}/>
         </Routes>
         <End/>
     </BrowserRouter>
  </>
  ); 
}

export default App;