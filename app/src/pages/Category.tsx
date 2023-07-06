import { useParams } from "react-router-dom";
import { useItems } from "../data/Api";
import { Cards } from "../components/cards/Cards";
import "../components/Containers.css";

import "../components/Containers.css";

export function Category() {
  const { id } = useParams();
  const items = useItems();

  // Filter items by category_id
  const filteredItems = items.filter((item) => item.category_id === Number(id));

  return (
    <>
      {filteredItems.length > 0 ? (
        <div className="index-container">
          <Cards items={filteredItems} />
        </div>
      ) : (
        <div className="category-results-container">
          <div className="results">
            <h2>No items found in this category.</h2>
          </div>
        </div>
      )}
    </>
  );
}
