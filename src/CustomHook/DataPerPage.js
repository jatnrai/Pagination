import { useState, useEffect } from "react";
import axios from "axios";

function useProductData() {
  const [pageData, setPageData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setPageData(response.data.products);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { pageData, error };
}

export default useProductData;
