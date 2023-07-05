import { useParams } from "react-router-dom";
import { useItems } from "../data/GetItems";
import { Cards } from "../components/cards/Cards";
import "../components/Results.css";

export function Category() {
  const { id } = useParams();
  const items = useItems();

  // Filter items by category_id
  const filteredItems = items.filter((item) => item.category_id === Number(id));

  return (
    <>
      {filteredItems.length > 0 ? (
        <Cards items={filteredItems} />
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
