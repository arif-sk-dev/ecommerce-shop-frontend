import React, { useEffect, useState } from "react";
import { getData } from "./../../context/DataContext";
import FilterSection from "../../components/FilterSection";
import Loading from "../../../src/assets/Loading.gif";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

const Shop = () => {
  const { data, fetchAllProducts } = getData();

  // For Filter Component
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1); //pagination

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  };

  //pagination
  const pageHandler = (selectPage) => {
    setPage(selectPage);
  };

  // handle search, filter & price
  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );
  const dynamicPage = Math.ceil(filteredData?.length / 10); // for Pagination

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 pb-10 mt-20">
        {data?.length > 0 ? (
          // <>
          <div className="flex gap-8 md:flex-row lg:flex-row flex-col">
            {/* Filter Section  */}
            <FilterSection
              search={search}
              setSearch={setSearch}
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              handleCategoryChange={handleCategoryChange}
            />

            {/* Product Section  */}
            <div className="flex flex-col">
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 ">
                {filteredData
                  ?.slice((page - 1) * 10, page * 10)
                  .map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                  })}
              </div>
              <Pagination
                pageHandler={pageHandler}
                page={page}
                dynamicPage={dynamicPage}
              />
            </div>
          </div>
        ) : (
          <div className="text-2xl text-zinc-500 italic text-center pt-10 h-screen">
            <img src={Loading} alt="Loading..." className="mx-auto w-20 h-20" />
            <p>Loading products...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Shop;
