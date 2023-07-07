// Import necessary dependencies and components
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { useItemById } from '../../data/Api'
import { ItemCard } from './ItemCard'

// Mock the API module and CSS import
jest.mock('../../data/Api')
jest.mock('./ItemCard.css', () => ({}))

// Begin describing the test suite for the 'ItemCard' component
describe('ItemCard', () => {
  // Test case: Renders item card with correct details
  test('renders item card with correct details', () => {
    // Define a mock item with sample details
    const mockItem = {
      id: 1,
      name: 'Sample Item',
      image: 'sample.jpg',
      like_count: 10,
      comment_count: 5,
      description: 'Sample description',
      price: 1000,
      shipping_fee: 'Free shipping'
    };

    // Mock the 'useItemById' function to return the mock item
    (useItemById as jest.Mock).mockReturnValue(mockItem)

    // Render the 'ItemCard' component inside a 'MemoryRouter' with initial route '/items/1'
    render(
      <MemoryRouter initialEntries={['/items/1']}>
        <Routes>
          <Route path="/items/:id" element={<ItemCard />} />
        </Routes>
      </MemoryRouter>
    )

    // Perform assertions to check if the expected elements are rendered with the correct details
    expect(screen.getByText('Sample Item')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('Sample description')).toBeInTheDocument()
    expect(screen.getByText('¥1,000')).toBeInTheDocument()
    expect(screen.getByText('Free shipping')).toBeInTheDocument()
    expect(screen.getByText('購入手続きへ')).toBeInTheDocument()
  })

  // Test case: Renders 'Item not found...' when item is not found
  test("renders 'Item not found...' when item is not found", () => {
    // Mock the 'useItemById' function to return undefined (item not found)
    (useItemById as jest.Mock).mockReturnValue(undefined)

    // Render the 'ItemCard' component inside a 'MemoryRouter' with initial route '/items/1'
    render(
      <MemoryRouter initialEntries={['/items/1']}>
        <Routes>
          <Route path="/items/:id" element={<ItemCard />} />
        </Routes>
      </MemoryRouter>
    )

    // Check if the 'Item not found...' text is rendered
    expect(screen.getByText('Item not found...')).toBeInTheDocument()
  })
})
