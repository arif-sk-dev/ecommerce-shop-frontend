import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DataContext } from "../context/DataContext";
import { Autoplay } from "swiper/modules";
import { FcNext, FcPrevious } from "react-icons/fc";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  // console.log(data);
  

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <div onClick={onclick} className={`arrow ${className}`} style={{zIndex:11}}>
        <FcPrevious className= "arrows" style={{...style, display:"block", borderRadius: "50px", background: "white", color: "black", position: "absolute", left: "50px"}}/>
      </div>
    )
  }

  const SampleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <div>
        <FcNext className= "arrows" />
      </div>
    )
  }

  var settings = {
    dots: true,
    Autoplay:true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    NextArrow: <SampleNextArrow to='next' />,
    prevArrow: <SamplePrevArrow to='prev' />,
  };

  if (!data || data.length === 0) {
    return <div>Loading products for carousel...</div>; 
  }

  return (
    <div className="container mt-15 z-10">
      <Slider {...settings}>
        {data.slice(14, 20).map((item, index) => {
          return (
            <div
              key={index}
              // className="container bg-gradient-to-r from-[#006e6e] via-[#00a896] to-[#40e0d0] py-4 w-screen md:h-[70vh] lg:h-[70vh] h-[40vh]">
              className="container bg-zinc-200 py-4 w-screen md:h-[70vh] lg:h-[70vh] h-[40vh]">
                <div className="flex flex-cols-4 gap-10 justify-between mx-auto  items-center px-4">
                  <div className="space-y-6 flex-3 items-center">
                    <h3 className="bg-gradient-to-r from-[#470165] via-[#049385] to-[#880e05]     bg-clip-text text-transparent lg:text-4xl md:text-2xl sm:text-[16px] font-bold mx-auto">Brighten Your World With The Best Fashion!</h3>
                    <h1 className="bg-gradient-to-r from-[#030caf] via-[#940404] to-[#02681b]     bg-clip-text text-transparent md:text-4xl sm:text-2xl font-bold mx-auto">{item.title}</h1>
                    {/* <h1 className="container sm:hidden md:block font-semibold text-zinc-800">{item.description}</h1> */}
                    <div>
                      <button className="bg-gradient-to-r from-[#006e6e] via-[#00a896] to-[#ab0c0c] text-white border-1 px-3 py-2 rounded-[5px] cursor-pointer">Shop Now</button>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img src={item.image} className="w-[100%] md:h-[60vh] lg:h-[60vh] sm:h-[60vh] mx-auto dark-drop-shadow-lg hover:scale-105 transition-all" />
                  </div>
                </div>
            </div>
          );
        })}
        
      </Slider>
    </div>
  );
};

export default Carousel;
