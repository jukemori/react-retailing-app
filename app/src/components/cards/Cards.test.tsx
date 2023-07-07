// Import necessary dependencies and components
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Cards } from './Cards'

// Mock the CSS file for testing purposes
jest.mock('./Cards.css', () => ({}))

// Define the interface for an item
interface Item {
  id: number
  image: string
  name: string
  like_count: number
  price: number
  is_sold_out: boolean
}

// Begin describing the test suite for the 'Cards' component
describe('Cards', () => {
  // Test case: Renders cards with correct details
  test('renders cards with correct details', () => {
    // Define an array of mock items
    const mockItems: Item[] = [
      {
        id: 1,
        name: 'Item 1',
        image: 'image1.jpg',
        like_count: 10,
        price: 1000,
        is_sold_out: false
      },
      {
        id: 2,
        name: 'Item 2',
        image: 'image2.jpg',
        like_count: 0,
        price: 2000,
        is_sold_out: true
      }
    ]

    // Render the 'Cards' component with the mock items inside a 'MemoryRouter'
    render(
      <MemoryRouter>
        <Cards items={mockItems} />
      </MemoryRouter>
    )

    // Perform assertions to check if the expected elements are rendered
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('¥1,000')).toBeInTheDocument()
    expect(screen.getByText('¥2,000')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()

    // Check if the item images have the correct source (URL)
    const item1Image = screen.getByAltText('Item 1')
    expect(item1Image).toHaveAttribute('src', 'image1.jpg')

    const item2Image = screen.getByAltText('Item 2')
    expect(item2Image).toHaveAttribute('src', 'image2.jpg')

    // Check if the 'SOLD' text is rendered
    expect(screen.getByText('SOLD')).toBeInTheDocument()
  })

  // Test case: Renders '出品' button
  test("renders '出品' button", () => {
    // Define an empty array of mock items
    const mockItems: Item[] = []

    // Render the 'Cards' component with the mock items inside a 'MemoryRouter'
    render(
      <MemoryRouter>
        <Cards items={mockItems} />
      </MemoryRouter>
    )

    // Check if the '出品' button is rendered
    expect(screen.getByText('出品')).toBeInTheDocument()
  })
})
