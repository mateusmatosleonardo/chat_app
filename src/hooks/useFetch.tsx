import { useEffect, useState } from "react";
import { api } from "../service/api";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsFetching(false);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { data, isFetching };
}
