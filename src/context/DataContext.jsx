import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);
export const DataProvider = ({children}) => {
  const [data, setData] = useState();

  //Fetching all product from API
  const fetchAllProducts = async ()=> {
    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products');
      console.log(res);
    }
      catch (error) {
        console.log(error);
    }
  }
  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};
