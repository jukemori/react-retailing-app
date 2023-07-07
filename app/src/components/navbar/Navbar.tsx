import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Search } from "../search/Search";
import { MenuBars, Bell, Check } from "../Icons";
import { Tabs } from "../tabs/Tabs";

export function Navbar() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const renderNavContent = () => {
    if (
      location.pathname.includes("/item/") ||
      location.pathname.includes("/search")
    ) {
      return <></>;
    }
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <div
              className="menu-icon"
              data-testid="menu-icon"
              onClick={handleShowNavbar}
            >
              <MenuBars />
            </div>
            <Search />
            <div
              className={`nav-elements  ${showNavbar && "active"}`}
              data-testid="nav-elements"
            >
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="">About</NavLink>
                </li>
                <li>
                  <NavLink to="">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-icons">
              <Bell />
              <Check />
            </div>
          </div>
        </nav>
        <Tabs />
      </>
    );
  };

  return <>{renderNavContent()}</>;
}
