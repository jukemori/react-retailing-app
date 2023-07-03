import { useState, useEffect } from "react";
import axios from "axios";

const base_url = "http://localhost:8000";
export function useCategories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${base_url}/categories`)
      .then((response) => setCategories(response.data.data)) // Assuming the response has a "data" property
      .catch((error) => console.log(error));
  }, []);

  return categories;
}
