import { useItems } from "../data/api";

export function Home() {
  const items = useItems();
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}
