import React from 'react'
import { getData } from '../context/DataContext';

const FilterSection = () => {
  const { categoryOnlyData } = getData();

  // "All" to the category list
  const categories = ['All', ...categoryOnlyData];

  return (
    <div className='bg-zinc-50 p-4 rounded-md h-max sm:w-[300px] md:min-w-[220px] lg:min-w-[220px]'>
      <input type='text' placeholder='Search...' className='bg-white p-2 rounded-md border-1 border-zinc-500' />

      {/* Category data */}
      <h1 className='mt-5 font-semibold text-xl'>Category:</h1>
      <div className='flex flex-col gap-2 mt-3'>
        {
          categories?.map((item, index) => {
            return <div key={index} className='flex gap-2'>
              <input type='checkbox' />
              <button className='uppercase cursor-pointer'>{item}</button>
            </div>
          })
        }
      </div>

      {/* Price range */}
      <h1 className='mt-5 mb-3 font-semibold text-xl'>Price Range:</h1>
      <div className='flex flex-col gap-3'>
        <label htmlFor = "">Price Range: $0 - $5000</label>
        <input type="range" name="" />
      </div>
      <button className="my-3 bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition cursor-pointer">Reset Filters</button>
    </div>
  )
}

export default FilterSection;
