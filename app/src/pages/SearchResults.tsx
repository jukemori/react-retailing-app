import { useLocation } from 'react-router-dom'
import { useItems } from '../data/Api'
import { ItemNavbar } from '../components/navbar/ItemNavbar'
import { Cards } from '../components/cards/Cards'
import '../components/Containers.css'

// This component displays search results based on a keyword
export function SearchResults (): JSX.Element {
  const location = useLocation() // Get the current location from react-router-dom
  const queryParams = new URLSearchParams(location.search) // Extract query parameters from the location
  const keyword = queryParams.get('keyword')?.toLowerCase() ?? '' // Retrieve the 'keyword' parameter and convert it to lowercase (if it exists)
  const items = useItems() // Get items from the data API
  const filteredItems = items.filter((item) => {
    const name = item.name.toLowerCase() // Convert each item's name to lowercase
    return name.startsWith(keyword) // Check if the item's name starts with the keyword
  })

  return (
    <>
      <ItemNavbar />
      {filteredItems.length > 0
        ? (
        <>
          <div className="results-container">
            <div className="results">
              <h2>Search Results for: {keyword}</h2>
            </div>
          </div>
          <Cards items={filteredItems} />
        </>
          )
        : (
        <div className="results-container">
          <div className="results">
            <h2>No items found from {keyword}...</h2>
          </div>
        </div>
          )}
    </>
  )
}
