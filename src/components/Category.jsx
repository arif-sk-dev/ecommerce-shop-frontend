import React from "react";
import { getData } from "../context/DataContext";

const Category = () => {
  const { data } = getData();

  const getUniqueCategory = (data, property) => {
    const values = data?.map((curElem) => curElem[property]);
    const uniqueValues = [...new Set(values)];
    return uniqueValues;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <div>
      <div className="container flex flex-wrap md:flex-row lg:flex-row gap-3 justify-center items-center mt-20">
        {categoryOnlyData?.map((category, index) => (
          <div className="bg-gradient-to-r from-[#006e6e] via-[#00a896] to-[#ab0c0c] text-white px-3 py-2 text-sm font-semibold rounded-[5px] uppercase cursor-pointer" key={index}>{category}</div>
        ))}
      </div>
    </div>
  );
};

export default Category;
