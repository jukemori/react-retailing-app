import { NavLink } from "react-router-dom";
import "./Tabs.css";

export function Tabs() {
  return (
    <div className="tabs">
      <div className="tab-container">
        <NavLink to="/" className="tab">
          Home
        </NavLink>
        <NavLink to="/store" className="tab">
          Store
        </NavLink>
        <NavLink to="/about" className="tab">
          About
        </NavLink>
      </div>
    </div>
  );
}
