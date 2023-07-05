import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Item } from "./pages/Item";
import { Category } from "./pages/Category";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { SearchResults } from "./pages/SearchResults";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
