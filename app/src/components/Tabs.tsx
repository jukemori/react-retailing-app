import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useCategories } from "../data/GetCategories";
import "./Tabs.css";

export function Tabs() {
  const categories = useCategories();
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <>
      <ul>
        {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
        <li className={splitLocation[1] === "" ? "active" : ""}>
          <NavLink to="/">すべて</NavLink>
        </li>
        {categories.map((category) => (
          <li className={splitLocation[3] === category.id ? "active" : ""}>
            <NavLink to={`/category/${category.id}`} key={category.id}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
