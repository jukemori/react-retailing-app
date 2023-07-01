import { NavLink } from "react-router-dom";
import { useCategories } from "../data/GetCategories";
import "./Tabs.css";

export function Tabs() {
  const categories = useCategories();
  return (
    <div className="tabs">
      <div className="tab-container">
        <NavLink to="/" className="tab">
          すべて
        </NavLink>
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            className="tab"
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
