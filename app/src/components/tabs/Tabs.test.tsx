// Import necessary dependencies and components
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Tabs } from './Tabs'

// Mock the CSS import and the 'useCategories' function from the API module
jest.mock('./Tabs.css', () => ({}))
jest.mock('../../data/Api', () => ({
  useCategories: jest.fn(() => [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' }
  ])
}))

// Begin describing the test suite for the 'Tabs' component
describe('Tabs', () => {
  // Test case: Renders tabs with active class for the current location
  test('renders tabs with active class for the current location', () => {
    // Render the 'Tabs' component inside a 'MemoryRouter' with initial route '/category/2'
    render(
      <MemoryRouter initialEntries={['/category/2']}>
        <Tabs />
      </MemoryRouter>
    )

    // Perform assertions to check if the expected tabs are rendered with the correct active class
    expect(screen.getByText('すべて')).toBeInTheDocument()
    expect(screen.getByText('Category 1')).not.toHaveClass('active')
    expect(screen.getByText('Category 2')).toHaveClass('active')
  })
})
