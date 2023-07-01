import { useState, useEffect } from "react";
import axios from "axios";

const base_url = "http://localhost:8000";

export const useItems = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${base_url}/items`)
      .then((response) => setItems(response.data.data)) // Assuming the response has a "data" property
      .catch((error) => console.log(error));
  }, []);

  return items;
};

export const useItemById = (id: number) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    axios
      .get(`${base_url}/items/${id}`)
      .then((response) => setItem(response.data)) // Assuming the response is the item object itself
      .catch((error) => console.log(error));
  }, [id]);

  return item;
};
