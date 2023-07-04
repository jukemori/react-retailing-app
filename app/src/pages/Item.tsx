import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useItemById } from "../data/GetItems";
import {
  Heart,
  Message,
  Flag,
  Left,
  MagnifyingGlass,
  Download,
  Xmark,
} from "../components/Icons";
import { Search } from "../components/Search";
import "./Item.css";
import "../components/Navbar.css";

export function Item() {
  const { id } = useParams();
  const item: any = useItemById(Number(id));
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  if (!item) {
    return <div>Item not found...</div>; // Handle the case when the item is not found or still loading
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="return" onClick={() => navigate(-1)}>
            <Left />
          </div>
          <div
            className={`nav-search-container ${showSearch ? "visible" : ""}`}
          >
            <div
              className={`nav-search ${showSearch ? "visible" : ""}`}
              onClick={() => {
                setShowTitle(!showTitle);
                setShowSearch(!showSearch);
              }}
            >
              <Xmark />
            </div>
            <div className={`nav-search ${showSearch ? "visible" : ""}`}>
              <Search />
            </div>
          </div>

          <div className={`nav-title ${showTitle ? "" : "hidden"}`}>
            <h1>{item.name}</h1>
          </div>
          <div className="nav-icons">
            <div
              onClick={() => {
                setShowTitle(!showTitle);
                setShowSearch(!showSearch);
              }}
            >
              <MagnifyingGlass />
            </div>

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
