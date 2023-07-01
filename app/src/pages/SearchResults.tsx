import { useLocation } from "react-router-dom";
import { useItems } from "../data/GetItems";
import { Tabs } from "../components/Tabs";
import { Link } from "react-router-dom";

export function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword")?.toLowerCase() ?? "";
  const items = useItems();
  console.log(items);
  return (
    <>
      <Tabs />

      <h2>Search Results for: {keyword}</h2>
      {items
        .filter((item) => {
          const name = item.name.toLowerCase();
          return name.startsWith(keyword);
        })

        .map((item) => (
          <div key={item.id}>
            <Link to={`/item/${item.id}`}>
              <img src={item.image} alt={item.name} />
            </Link>
          </div>
        ))}
    </>
  );
}
