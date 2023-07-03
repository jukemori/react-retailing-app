import { useParams } from "react-router-dom";
import { useItemById } from "../data/GetItems";
import { Heart, Message, Flag } from "../components/Icons";
import "./Item.css";

export function Item() {
  const { id } = useParams();
  const item: any = useItemById(Number(id));

  if (!item) {
    return <div>Item not found...</div>; // Handle the case when the item is not found or still loading
  }

  return (
    <>
      <div className="item-container">
        <div className="item">
          <div className="item-pic">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="item-info">
            <h1 className="item-title">{item.name}</h1>
            <div className="item-icons">
              <div className="item-likes-comments">
                <div className="item-likes">
                  <p className="like-box">
                    <Heart /> いいね！
                  </p>
                  <p className="like-count">{item.like_count}</p>
                </div>
                <div className="item-comments">
                  <p className="comment-box">
                    <Message /> コメント
                  </p>
                  <p className="comment-count">{item.comment_count}</p>
                </div>
              </div>
              <div className="item-flag">
                <Flag />
              </div>
            </div>
            <div className="item-desctiption">
              <p className="description-title">商品の説明</p>
              <p>{item.description}</p>
            </div>
            <p>{item.price} yen</p>
            <p>shipping fee: {item.shipping_fee}</p>
          </div>
        </div>
      </div>
    </>
  );
}
