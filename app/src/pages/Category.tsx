import { useParams } from "react-router-dom";

import { useItems } from "../data/GetItems";
import { Tabs } from "../components/Tabs";
import { Cards } from "../components/Cards";

export function Category() {
  const { id } = useParams();
  const items = useItems();

  // Filter items by category_id
  const filteredItems = items.filter((item) => item.category_id === Number(id));

  return (
    <>
      <Tabs />
      <Cards items={filteredItems} />
    </>
  );
}
