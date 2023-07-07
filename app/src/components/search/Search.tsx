import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useItems } from '../../data/Api'
import { MagnifyingGlass } from '../Icons'
import './Search.css'

export function Search (): React.ReactElement {
  // Get the navigation function for programmatic navigation
  const navigate = useNavigate()

  // Fetch the list of items
  const items = useItems()

  // State variables for search functionality
  const [value, setValue] = useState('')
  const [searchPerformed, setSearchPerformed] = useState(false)

  // Handle the input change event
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
    setSearchPerformed(false)
  }

  // Perform a search with the specified search term
  const onSearch = (searchTerm: string): void => {
    setValue(searchTerm)
    setSearchPerformed(true)
    navigate(`/search?keyword=${searchTerm}`)
  }

  // Handle the key press event (Enter key)
  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      onSearch(value)
    }
  }

  return (
    <>
      {/* Search container */}
      <div className="search-container">
        {/* Input field for the search term */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          className="search-input"
          placeholder="検索"
        />

        {/* Search button */}
        <div
          onClick={() => {
            onSearch(value)
          }}
          className="search-button"
          data-testid="search-button"
        >
          <MagnifyingGlass />
        </div>

        {/* Search suggestions */}
        {value !== '' && !searchPerformed && (
          <div className="search-suggestions">
            {/* Filter and map the items for search suggestions */}
            {items
              .filter((item) => {
                const searchTerm = value.toLowerCase()
                const name = item.name.toLowerCase()

                return (
                  searchTerm !== '' &&
                  String(name).startsWith(String(searchTerm)) &&
                  String(name) !== String(searchTerm)
                )
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    onSearch(item.name)
                  }}
                  className="search-item"
                >
                  {item.name}
                </div>
              ))}

            {/* Display the search term itself as a suggestion */}
            {value !== '' &&
              !items.some((item) =>
                item.name.toLowerCase().startsWith(value.toLowerCase())
              ) && (
                <div
                  onClick={() => {
                    onSearch(value)
                  }}
                  className="search-item"
                >
                  {value}
                </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}
