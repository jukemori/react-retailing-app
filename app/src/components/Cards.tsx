import { Link } from "react-router-dom";

interface Item {
  id: number;
  image: string;
  name: string;
}

export function Cards({ items }: { items: Item[] }) {
  return (
    <>
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
