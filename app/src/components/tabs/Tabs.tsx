import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCategories } from "../../data/GetCategories";
import "./Tabs.css";

export function Tabs() {
  const categories = useCategories();
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");
  return (
    <>
      <div className="tabs">
        <div className="tabs-container">
          <ul>
            <li className={splitLocation[1] === "" ? "active" : ""} key="all">
              <NavLink to="/">すべて</NavLink>
            </li>
            {categories.map((category) => (
              <li
                className={splitLocation[3] === category.id ? "active" : ""}
                key={category.id}
              >
                <NavLink to={`/category/${category.id}`}>
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
