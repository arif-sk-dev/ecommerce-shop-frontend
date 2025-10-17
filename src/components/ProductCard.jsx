import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;

  // Generate star rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden cursor-pointer">
      <div className="p-4 flex flex-col justify-between h-full">
        <img
          src={image}
          alt={title}
          className="h-40 object-contain mb-4 transition-transform hover:scale-105"
        />
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold text-gray-800 text-center line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">{category}</p>
          <p className="text-sm text-gray-600 mt-2 text-center line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-1 mt-2">{renderStars()}</div>
          <p className="text-xl font-bold text-green-600 mt-2">${price}</p>
        </div>
        <button className="mt-4 bg-zinc-100 text-black px-4 py-2 rounded hover:bg-zinc-300 transition cursor-pointer flex gap-2 items-center justify-center">
          <span><FaCartPlus /></span> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
