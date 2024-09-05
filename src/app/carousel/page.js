import React from 'react'
import Carousel from './carousel';
const page = () => {
    const images = [
        "https://via.placeholder.com/800x400/FF5733/fff?text=Akshay",
        "https://via.placeholder.com/800x400/33FF57/fff?text=Shende",
        "https://via.placeholder.com/800x400/3357FF/fff?text=Ak",
      ];
  return (
    <div >
    <Carousel images={images}/>
    </div>
  )
}

export default page
