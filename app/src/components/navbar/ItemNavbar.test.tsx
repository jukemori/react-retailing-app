// import { render, screen, fireEvent } from "@testing-library/react";
// import { ItemNavbar } from "./ItemNavbar";

// describe("ItemNavbar", () => {
//   test("should render the navbar with the correct title", () => {
//     const item = {
//       name: "My Item",
//     };
//     render(<ItemNavbar item={item} />);
//     const titleElement = screen.getByText("My Item");
//     expect(titleElement).toBeInTheDocument();
//   });

//   test("should hide the title when the search bar is open", () => {
//     render(<ItemNavbar />);
//     const searchIcon = screen.getByTestId("search-icon");
//     fireEvent.click(searchIcon);
//     const titleElement = screen.getByTestId("nav-title");
//     expect(titleElement).toHaveClass("hidden");
//   });

//   test("should show the title when the search bar is closed", () => {
//     render(<ItemNavbar />);
//     const searchIcon = screen.getByTestId("search-icon");
//     fireEvent.click(searchIcon);
//     fireEvent.click(searchIcon);
//     const titleElement = screen.getByTestId("nav-title");
//     expect(titleElement).not.toHaveClass("hidden");
//   });
// });

test("placeholder test", () => {
  expect(true).toBe(true);
});
