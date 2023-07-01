import { useParams } from "react-router-dom";
import { useItemById } from "../data/api";

export function Item() {
  const { id } = useParams();
  const item: any = useItemById(Number(id));

  if (!item) {
    return <div>Loading...</div>; // Handle the case when the item is not found or still loading
  }

  return (
    <>
      <div>
        <img src={item.image} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.comment_count} comments</p>
        <p>{item.like_count} likes</p>
        <p>{item.price} yen</p>
        <p>shipping fee: {item.shipping_fee}</p>
        <p>{item.description}</p>
        {/* Render other details of the item */}
      </div>
    </>
  );
}
