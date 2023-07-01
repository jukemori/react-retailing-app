import { Link } from "react-router-dom";
import { useItems } from "../data/GetItems";
import { Tabs } from "../components/Tabs";

export function Home() {
  const items = useItems();
  return (
    <>
      <Tabs />
      {items.map((item) => (
        <div key={item.id}>
          <Link to={`/item/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
        </div>
      ))}
    </>
  );
}
