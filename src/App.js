// import React from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Box, Container, Text, VStack, Heading, Image } from '@chakra-ui/react';
// import ApplicationForm from './Components/ApplicationForm';
// import Navbar from './Components/Navbar';
// import AboutTheMentor from './Components/AboutTheMentor';
// import Footer from './Components/Footer';
// import MentorDescription from './Components/MentorDescription';
// import TechMentorship from './Components/Technologies';
// import ContactPage from './Components/ContactPage'; // Assume you've created this component
// import image from './assets/Students.png';

// function App() {
//   return (
//     <BrowserRouter>
//       <Box textAlign="center" fontSize="xl">
//         <Navbar />
//         <Routes>
//           {/* <Route path="/" exact>
//             <Container maxW="container.md">
//               <Box p={4}>
//                 <Heading as="h1" size="xl" mb={6}>
//                   Welcome to Your Path to Tech
//                 </Heading>
//               </Box>
//               <VStack spacing={8}>
//                 <AboutTheMentor />
//                 <Image src={image} alt="Devs" width="50%" borderRadius="10px" />
//                 <MentorDescription />
//                 <TechMentorship />
//                 <ApplicationForm />
//               </VStack>
//             </Container>
//           </Route> */}
//           <Route path="/contact" element={ContactPage} />
//         </Routes>
//         <Footer />
//       </Box>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import ContactPage from './Components/ContactPage';
// import Navbar from './Components/Navbar';
// import SiteInfo from './Components/SiteInfo';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="siteinfo" element={<SiteInfo />} />
//         <Route path="about" element={<AboutTheMentor />} />
//         <Route path="contact" element={<ContactPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ContactPage from './Components/ContactPage';
import Navbar from './Components/Navbar';
import SiteInfo from './Components/SiteInfo';
import Footer from './Components/Footer';
import AboutTheMentor from './Components/AboutTheMentor';

function App() {
  return (
    // <Flex direction="column" minHeight="100vh">
    <>
      <Navbar />
      {/* <Flex flex="1" direction="column"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/siteinfo" element={<SiteInfo />} />
        <Route path="/about" element={<AboutTheMentor />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* </Flex> */}
      <Footer />
    </>
    // </Flex>
  );
}

export default App;
