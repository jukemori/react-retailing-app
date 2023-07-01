import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useItems } from "../data/api";
import { Tabs } from "../components/Tabs";

export function Category() {
  const { id } = useParams();
  const items = useItems();

  // Filter items by category_id
  const filteredItems = items.filter((item) => item.category_id === Number(id));

  return (
    <>
      <Tabs />
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/item/${item.id}`}>
            <img src={item.image} alt={item.name} />
          </Link>
        </div>
      ))}
    </>
  );
}
