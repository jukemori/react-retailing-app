import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import { Search } from '../search/Search'
import { MenuBars, Bell, Check } from '../Icons'
import { Tabs } from '../tabs/Tabs'

export function Navbar (): JSX.Element {
  // Get the current location from react-router
  const location = useLocation()

  // State variable for controlling the visibility of the navbar
  const [showNavbar, setShowNavbar] = useState(false)

  // Toggle the visibility of the navbar
  const handleShowNavbar = (): void => {
    setShowNavbar(!showNavbar)
  }

  // Render the content of the navbar based on the current location
  const renderNavContent = (): JSX.Element | null => {
    // Check if the current location includes specific paths
    if (
      location.pathname.includes('/item/') ||
      location.pathname.includes('/search')
    ) {
      // Do not render the navbar for specific paths
      return null
    }

    // Render the navbar and tabs for other paths
    return (
      <>
        {/* Main navigation bar */}
        <nav className="navbar">
          <div className="nav-container">
            {/* Menu icon for showing/hiding the navigation elements */}
            <div
              className="menu-icon"
              data-testid="menu-icon"
              onClick={handleShowNavbar}
            >
              <MenuBars />
            </div>

            {/* Search component */}
            <Search />

            {/* Navigation elements */}
            <div
              className={`nav-elements ${showNavbar ? 'active' : ''}`}
              data-testid="nav-elements"
            >
              <ul>
                {/* Navigation links */}
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

            {/* Icons */}
            <div className="nav-icons">
              <Bell />
              <Check />
            </div>
          </div>
        </nav>

        {/* Additional tabs component */}
        <Tabs />
      </>
    )
  }

  return <>{renderNavContent()}</>
}
