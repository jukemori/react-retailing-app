import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useItemById } from "../../data/GetItems";
import "./Navbar.css";
import { Search } from "../search/Search";
import { Left, Xmark, MagnifyingGlass, Download } from "../Icons";

export function ItemNavbar() {
  const { id } = useParams();
  const item: any = useItemById(Number(id));
  const navigate = useNavigate();
  const [showTitle, setShowTitle] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="return" onClick={() => navigate(-1)}>
          <Left />
        </div>
        <div className={`nav-search-container ${showSearch ? "visible" : ""}`}>
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
        {item && item.name ? (
          <div className={`nav-title ${showTitle ? "" : "hidden"}`}>
            <h1>{item.name}</h1>
          </div>
        ) : null}
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
  );
}