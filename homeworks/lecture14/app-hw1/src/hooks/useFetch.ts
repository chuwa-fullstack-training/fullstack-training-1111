import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useFetch = <T = unknown>(url: string): UseFetchResult<T> => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error as AxiosError);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
