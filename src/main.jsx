import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Homepage from './components/Home Page/Homepage';
import Navbar from './components/Navbar/Navbar';
import PrepRoom from './components/Prep Room/PrepRoom';

// Create a wrapper App component to initialize AOS
const App = () => {
  return (
    <>
      <Navbar />
      <Homepage />
      <PrepRoom />
    </>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
