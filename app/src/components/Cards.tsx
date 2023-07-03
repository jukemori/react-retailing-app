import { Link } from "react-router-dom";
import "./Cards.css";
import { Heart } from "./Icons";

interface Item {
  id: number;
  image: string;
  name: string;
  like_count: number;
  price: number;
  is_sold_out: boolean;
}

export function Cards({ items }: { items: Item[] }) {
  return (
    <>
      <div className="container">
        <div className="cards">
          {items.map((item) => (
            <div key={item.id} className="card">
              <Link style={{ textDecoration: "none" }} to={`/item/${item.id}`}>
                <img src={item.image} alt={item.name} />
                <div className="card-infos">
                  <div className="card-title">
                    <p>{item.name}</p>
                  </div>
                  <div className="card-details">
                    <p className="card-price">
                      ¥{item.price.toLocaleString("en-US")}
                    </p>

                    <p>
                      <Heart /> {item.like_count}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
