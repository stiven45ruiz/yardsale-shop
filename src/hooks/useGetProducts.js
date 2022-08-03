import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    const getProducts = async() =>{
      const res = await axios(API)
      setProducts(res.data)
    }
    getProducts()
  }, []);

  return (
    products
  )
}

export default useGetProducts