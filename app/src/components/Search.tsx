import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useItems } from "../data/GetItems";

export function Search() {
  const navigate = useNavigate();
  const items = useItems();
  const [value, setValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
    navigate(`/search?keyword=${searchTerm}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => onSearch(value)}>Search</button>
      <div>
        {items
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const name = item.name.toLowerCase();

            return (
              searchTerm && name.startsWith(searchTerm) && name !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div key={item.id} onClick={() => onSearch(item.name)}>
              {item.name}
            </div>
          ))}
      </div>
    </>
  );
}
