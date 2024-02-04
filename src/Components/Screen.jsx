import React, { useState,useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageComponentCard from "./ImageContentCard";
import CustomCard from "./Responsive/CustomCard";
import Card from '../Components/Responsive/Card'
const Screen = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Function to update screen size state
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      
       
        {screenSize >= 573 ? <ImageComponentCard></ImageComponentCard>:<Card /> }
          {/* <h1 className={screenSize >= 992 ? 'text-danger' : 'text-primary'}>
            Hello World
          </h1> */}
      
      
    </>
  );
};

export default Screen;
