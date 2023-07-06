import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useItemById } from "../../data/Api";
import { ItemCard } from "./ItemCard";

jest.mock("../../data/Api");

jest.mock("./ItemCard.css", () => ({})); // Mock the CSS import

describe("ItemCard", () => {
  test("renders item card with correct details", () => {
    const mockItem = {
      id: 1,
      name: "Sample Item",
      image: "sample.jpg",
      like_count: 10,
      comment_count: 5,
      description: "Sample description",
      price: 1000,
      shipping_fee: "Free shipping",
    };

    (useItemById as jest.Mock).mockReturnValue(mockItem);

    render(
      <MemoryRouter initialEntries={["/items/1"]}>
        <Routes>
          <Route path="/items/:id" element={<ItemCard />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Sample Item")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Sample description")).toBeInTheDocument();
    expect(screen.getByText("¥1,000")).toBeInTheDocument();
    expect(screen.getByText("Free shipping")).toBeInTheDocument();
    expect(screen.getByText("購入手続きへ")).toBeInTheDocument();
  });

  test("renders 'Item not found...' when item is not found", () => {
    (useItemById as jest.Mock).mockReturnValue(null);

    render(
      <MemoryRouter initialEntries={["/items/1"]}>
        <Routes>
          <Route path="/items/:id" element={<ItemCard />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Item not found...")).toBeInTheDocument();
  });
});
