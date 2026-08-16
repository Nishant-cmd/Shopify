import { useState, useEffect } from 'react';
import { getRequestWithNativeFetch } from './api';

const url = 'https://fakestoreapi.com/products';

//Custom hook for data fetching
const useAllData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchDataForProducts = async () => {
      try {
        const productData = await getRequestWithNativeFetch(url, controller.signal);
        setData(productData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDataForProducts();
  }, []);

  return { data, loading, error };
};

export default useAllData;
