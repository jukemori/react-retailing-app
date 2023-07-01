import { useItems } from "../data/GetItems";
import { Tabs } from "../components/Tabs";
import { Cards } from "../components/Cards";

export function Home() {
  const items = useItems();
  return (
    <>
      <Tabs />
      <Cards items={items} />
    </>
  );
}
