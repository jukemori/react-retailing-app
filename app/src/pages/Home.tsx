import { useItems } from "../data/GetItems";
import { Cards } from "../components/cards/Cards";
import "../components/Containers.css";

export function Home() {
  const items = useItems();
  return (
    <>
      <div className="index-container">
        <Cards items={items} />
      </div>
    </>
  );
}
