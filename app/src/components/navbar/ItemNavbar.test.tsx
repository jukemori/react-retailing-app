// Import necessary dependencies and components
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { useItemById } from '../../data/Api'
import { ItemNavbar } from './ItemNavbar'

// Mock the API module and CSS imports
jest.mock('../../data/Api')
jest.mock('./Navbar.css', () => ({}))
jest.mock('../search/Search.css', () => ({}))

// Begin describing the test suite for the 'ItemNavbar' component
describe('ItemNavbar', () => {
  // Test case: Renders item name when available
  test('renders item name when available', () => {
    // Define a mock item name
    const itemName = 'Test Item';

    // Mock the 'useItemById' function to return an object with the item name
    (useItemById as jest.Mock).mockReturnValue({ name: itemName })

    // Render the 'ItemNavbar' component inside a 'MemoryRouter' with initial route '/1'
    render(
      <MemoryRouter initialEntries={['/1']}>
        <Routes>
          <Route path="/:id" element={<ItemNavbar />} />
        </Routes>
      </MemoryRouter>
    )

    // Perform an assertion to check if the item name is rendered
    expect(screen.getByText(itemName)).toBeInTheDocument()
  })
})
