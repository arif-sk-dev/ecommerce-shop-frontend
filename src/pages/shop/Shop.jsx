import React, { useEffect } from 'react';
import { getData } from './../../context/DataContext';
import FilterSection from '../../components/FilterSection';
import Loading from '../../../src/assets/Loading.gif'
import ProductCard from '../../components/ProductCard';

const Shop = () => {
  const {data, fetchAllProducts} = getData();

  // useEffect(() => {
  //   fetchAllProducts();
  // }, []);

  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 pb-10 mt-20'>
        {
          data?.length > 0 ? (
            <div className='flex gap-8 md:flex-row lg:flex-row flex-col'>

              {/* Filter Section  */}
              <FilterSection />

              {/* Product Section  */}
              <div className='grid gap-4 md:grid-cols-4 lg:grid-cols-4 grid-cols-1 '>
                {
                  data?.map((product, index)=> {
                    return <ProductCard key={index} product={product} />
                  })
                }
              </div>
            </div>
          ) : (
            <div className='text-2xl text-zinc-500 italic text-center pt-10 h-screen'>
              <img src={Loading} alt="Loading..." className="mx-auto w-20 h-20" />
              <p>Loading products...</p>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Shop;