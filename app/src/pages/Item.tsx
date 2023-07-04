import { useParams } from "react-router-dom";
import { useItemById } from "../data/GetItems";
import {
  Heart,
  Message,
  Flag,
  MagnifyingGlass,
  Left,
  Download,
} from "../components/Icons";
import "./Item.css";

export function Item() {
  const { id } = useParams();
  const item: any = useItemById(Number(id));

  if (!item) {
    return <div>Item not found...</div>; // Handle the case when the item is not found or still loading
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="return">
            <Left />
          </div>

          <div className="nav-title">{/* <h1>{item.name}</h1> */}</div>
          <div className="nav-icons">
            <MagnifyingGlass />
            <Download />
          </div>
        </div>
      </nav>
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
              <p className="description-content">{item.description}</p>
            </div>
            <div className="purchase-box">
              <div className="item-price">
                <h2>¥{item.price.toLocaleString("en-US")}</h2>
                <p>{item.shipping_fee}</p>
              </div>
              <h3>購入手続きへ</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
