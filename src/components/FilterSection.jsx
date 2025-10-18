import React from "react";
import { getData } from "../context/DataContext";

const FilterSection = ({
  search,
  setSearch,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  handleCategoryChange,
}) => {
  const { categoryOnlyData } = getData();

  // "All" to the category list
  const categories = ["All", ...categoryOnlyData];

  return (
    <div className="bg-zinc-50 p-4 rounded-md h-max sm:w-[300px] md: min-w-[250px] lg:min-w-[220px]">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 rounded-md border-1 border-zinc-500 w-full"
      />

      {/* Category data */}
      <h1 className="mt-5 font-semibold text-xl">Category:</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categories?.map((item, index) => {
          return (
            <div key={index} className="flex gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
              />
              <button className="uppercase cursor-pointer">{item}</button>
            </div>
          );
        })}
      </div>

      {/* Price range */}
      <h1 className="mt-5 mb-3 font-semibold text-xl">Price Range:</h1>
      <div className="flex flex-col gap-3">
        <label htmlFor="">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          name=""
          id=""
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
        />
      </div>
      <button
        className="my-3 bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition cursor-pointer"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setPriceRange([0, 5000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;

// .slice(page * 10 - 10, page * 10)
