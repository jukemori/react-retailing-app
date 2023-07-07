import { render } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { useItemById } from "../../data/Api";
import { ItemNavbar } from "./ItemNavbar";

jest.mock("../../data/Api");
jest.mock("./Navbar.css", () => ({}));
jest.mock("../search/Search.css", () => ({}));

describe("ItemNavbar", () => {
  test("renders item name when available", () => {
    const itemName = "Test Item";
    (useItemById as jest.Mock).mockReturnValue({ name: itemName });

    const { getByText } = render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<ItemNavbar />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText(itemName)).toBeInTheDocument();
  });
});
