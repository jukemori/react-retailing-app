import { useLocation } from "react-router-dom";
import { useItems } from "../data/GetItems";
import { Tabs } from "../components/Tabs";
import { Cards } from "../components/Cards";

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
      <Tabs />
      <h2>Search Results for: {keyword}</h2>
      <Cards items={filteredItems} />
    </>
  );
}
