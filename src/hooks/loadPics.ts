import { useEffect, useState } from "react";
import { IProduct } from "../PicsModels";
import axios, {AxiosError} from "axios";

export function useLoader() {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function loadProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>;
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    {error, loading}
  )
}