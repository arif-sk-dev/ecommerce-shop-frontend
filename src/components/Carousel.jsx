import React, { useContext, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { DataContext } from "../context/DataContext";

const Carousel = () => {
  const { data, fetchAllProducts } = useContext(DataContext);
  // console.log(data);
  

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!data || data.length === 0) {
    return <div>Loading products for carousel...</div>; 
  }

  return (
    <div className="container mt-15">
      <Slider {...settings}>
        {data.slice(14, 20).map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#006e6e] via-[#00a896] to-[#40e0d0] py-4 px-4">
                <div className="container flex flex-row gap-10 justify-center max-w-[1280px] mx-auto md:h-[70vh] lg:h-[70vh] sm:h-[70vh] items-center px-4">
                  <div className="space-y-6 flex-3 items-center">
                    <h3 className="text-white lg:text-4xl md:text-2xl sm:text-[16px] [text-shadow:0_0_5px_black] font-semibold mx-auto text-center">Brighten Your World With The Best Fashion!</h3>
                    <h1 className="text-red-200 md:text-4xl sm:text-2xl [text-shadow:0_0_5px_black] mx-auto text-center">{item.title}</h1>
                    {/* <h1 className="container sm:hidden md:block font-semibold text-zinc-800">{item.description}</h1> */}
                    <button className="bg-gradient-to-r from-[#006e6e] via-[#00a896] to-[#40e0d0] text-white border-1 px-3 py-2 rounded-[5px] cursor-pointer">Shop Now</button>
                  </div>
                  <div className="flex-1">
                    <img src={item.image} className="container w-[100%] md:h-[60vh] lg:h-[60vh] sm:h-[60vh] mx-auto dark-drop-shadow-lg" />
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
