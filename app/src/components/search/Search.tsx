import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useItems } from '../../data/Api'
import { MagnifyingGlass } from '../Icons'
import './Search.css'

export function Search (): React.ReactElement {
  const navigate = useNavigate()
  const items = useItems()
  const [value, setValue] = useState('')
  const [searchPerformed, setSearchPerformed] = useState(false)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
    setSearchPerformed(false)
  }

  const onSearch = (searchTerm: string): void => {
    setValue(searchTerm)
    setSearchPerformed(true)
    navigate(`/search?keyword=${searchTerm}`)
  }

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      onSearch(value)
    }
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyPress={handleKeyPress}
          className="search-input"
          placeholder="検索"
        />
        <div
          onClick={() => {
            onSearch(value)
          }}
          className="search-button"
          data-testid="search-button"
        >
          <MagnifyingGlass />
        </div>
        {value !== '' && !searchPerformed && (
          <div className="search-suggestions">
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
