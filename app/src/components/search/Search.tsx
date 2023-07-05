import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useItems } from "../../data/GetItems";
import { MagnifyingGlass } from "../Icons";
import "./Search.css";

export function Search() {
  const navigate = useNavigate();
  const items = useItems();
  const [value, setValue] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false); // New state variable

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setSearchPerformed(false); // Reset searchPerformed when input value changes
  };

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
    setSearchPerformed(true); // Set searchPerformed to true when a search is made
    navigate(`/search?keyword=${searchTerm}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

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
        <div onClick={() => onSearch(value)} className="search-button">
          <MagnifyingGlass />
        </div>
        {value &&
          !searchPerformed && ( // Conditionally render search suggestions if there is a value
            <div className="search-suggestions">
              {items
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const name = item.name.toLowerCase();

                  return (
                    searchTerm &&
                    name.startsWith(searchTerm) &&
                    name !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSearch(item.name)}
                    className="search-item"
                  >
                    {item.name}
                  </div>
                ))}
              {value &&
                !items.some((item) =>
                  item.name.toLowerCase().startsWith(value.toLowerCase())
                ) && (
                  <div onClick={() => onSearch(value)} className="search-item">
                    {value}
                  </div>
                )}
            </div>
          )}
      </div>
    </>
  );
}
