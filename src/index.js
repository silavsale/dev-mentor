// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ChakraProvider } from '@chakra-ui/react';
// import { BrowserRouter } from 'react-router-dom';
// import '../src/config/i18n';

// import theme from './theme';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ChakraProvider theme={theme}>
//         <App />
//       </ChakraProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './config/i18n';
import theme from './theme';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
