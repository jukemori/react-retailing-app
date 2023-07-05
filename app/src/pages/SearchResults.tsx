import { useLocation } from "react-router-dom";
import { useItems } from "../data/GetItems";
import { ItemNavbar } from "../components/navbar/ItemNavbar";
import { Cards } from "../components/cards/Cards";
import "../components/Containers.css";

export function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword")?.toLowerCase() ?? "";
  const items = useItems();
  const filteredItems = items.filter((item) => {
    const name = item.name.toLowerCase();
    return name.startsWith(keyword);
  });

  return (
    <>
      <ItemNavbar />
      {filteredItems.length > 0 ? (
        <>
          <div className="results-container">
            <div className="results">
              <h2>Search Results for: {keyword}</h2>
            </div>
          </div>
          <Cards items={filteredItems} />
        </>
      ) : (
        <div className="results-container">
          <div className="results">
            <h2>No items found from {keyword}...</h2>
          </div>
        </div>
      )}
    </>
  );
}
