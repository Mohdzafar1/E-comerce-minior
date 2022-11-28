import React from 'react'
import Carousel from 'better-react-carousel'
import Slider from "react-slick";
import "../Style/Home.css"
import img1 from "../Images/home-img1.jpg"
import img2 from "../Images/home-img2.jpg"
import img3 from "../Images/home-img3.jpg"
import img4 from "../Images/home-img2.jpg"
import Product from './Product';


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <>
         <Slider {...settings}>
          <div>
            <img src={img1} alt="" id="home-img"/>
          </div>
          <div>
            <img src={img2} alt="" id="home-img"/>
          </div>
          <div>
            <img src={img3} alt="" id="home-img"/>
          </div>
          <div>
            <img src={img4} alt="" id="home-img"/>
          </div>
          </Slider>
          <Product/>
    </>
  )
}

export default Home