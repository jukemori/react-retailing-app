import { useState, useEffect } from "react";
import axios from "axios";
import { act } from "react-dom/test-utils";

const base_url = "http://localhost:8000";

export function useItems() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/items`);
        act(() => {
          setItems(response.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return items;
}

export function useItemById(id: number) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${base_url}/items/${id}`);
        act(() => {
          setItem(response.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchItem();
  }, [id]);

  return item;
}

export function useCategories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${base_url}/categories`);
        act(() => {
          setCategories(response.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return categories;
}
