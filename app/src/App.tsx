import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Item } from "./pages/Item";
import { Category } from "./pages/Category";

// import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
