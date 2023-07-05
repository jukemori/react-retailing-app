import { useItems } from "../data/GetItems";
import { Cards } from "../components/cards/Cards";

export function Home() {
  const items = useItems();
  return (
    <>
      <Cards items={items} />
    </>
  );
}
