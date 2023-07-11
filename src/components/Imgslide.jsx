import React from 'react'
import './imgslide.css' 
import { useState } from 'react';
import { BiArrowToLeft } from "react-icons/bi";
import { BiArrowToRight } from "react-icons/bi";


function Imgslide({images}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
    
  return (
    <div className="image-slider">
          {/* <img src={images[currentImageIndex]} alt="" className='img-slider' /> */}
                <div className="icon-click">

                      <div className="click">
                          <BiArrowToLeft onClick={goToPreviousImage} />
                      </div>

                      <div className="click">
                          <BiArrowToRight onClick={goToNextImage} />
                      </div>

                </div>
    </div>

  )
}

export default Imgslide