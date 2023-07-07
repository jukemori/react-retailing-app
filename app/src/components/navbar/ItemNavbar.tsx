import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useItemById } from '../../data/Api'
import './Navbar.css'
import { Search } from '../search/Search'
import { Left, Xmark, MagnifyingGlass, Download } from '../Icons'

export function ItemNavbar (): JSX.Element {
  // Get the 'id' parameter from the URL
  const { id } = useParams<{ id: string }>()

  // Fetch the item data using the 'id'
  const item = useItemById(Number(id))

  // Get the navigation function for programmatic navigation
  const navigate = useNavigate()

  // State variables for controlling UI behavior
  const [showTitle, setShowTitle] = useState(true)
  const [showSearch, setShowSearch] = useState(false)

  // Retrieve the item name using optional chaining
  const itemName = item?.name // Optional chain expression

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Button for returning to the previous page */}
        <div
          className="return"
          data-testid="return-button"
          onClick={() => {
            navigate(-1)
          }}
        >
          <Left />
        </div>

        {/* Container for the search bar */}
        <div
          className={`nav-search-container ${showSearch ? 'visible' : ''}`}
          data-testid="search-container"
        >
          {/* Button to toggle visibility of the search bar */}
          <div
            className={`nav-search ${showSearch ? 'visible' : ''}`}
            onClick={() => {
              setShowTitle(!showTitle)
              setShowSearch(!showSearch)
            }}
          >
            <Xmark />
          </div>

          {/* Search bar component */}
          <div className={`nav-search ${showSearch ? 'visible' : ''}`}>
            <Search />
          </div>
        </div>

        {/* Render the item title if it exists and 'showTitle' is true */}
        {itemName !== undefined && showTitle
          ? (
          <div className="nav-title">
            <h1>{itemName}</h1>
          </div>
            )
          : null}

        {/* Container for the navigation icons */}
        <div className="nav-icons">
          {/* Button to toggle visibility of the search bar */}
          <div
            data-testid="magnifying-glass"
            onClick={() => {
              setShowTitle(!showTitle)
              setShowSearch(!showSearch)
            }}
          >
            <MagnifyingGlass />
          </div>

          {/* Download icon */}
          <Download />
        </div>
      </div>
    </nav>
  )
}
