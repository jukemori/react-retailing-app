// Import necessary dependencies and components
import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './Search'
import { useNavigate } from 'react-router-dom'

// Mock the CSS import and the 'useNavigate' hook
jest.mock('./Search.css', () => ({}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

// Begin describing the test suite for the 'Search' component
describe('Search', () => {
  // Test case: Should render the search input
  test('should render the search input', () => {
    // Render the 'Search' component
    render(<Search />)
    // Get the search input element
    const searchInput = screen.getByPlaceholderText('検索')
    // Perform an assertion to check if the search input element is rendered
    expect(searchInput).toBeInTheDocument()
  })

  // Test case: Should perform a search on enter key press
  test('should perform a search on enter key press', () => {
    // Mock the 'useNavigate' hook
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock)
    // Render the 'Search' component
    render(<Search />)
    // Get the search input element
    const searchInput = screen.getByPlaceholderText('検索')

    // Simulate a change event on the search input with a value of 'example'
    fireEvent.change(searchInput, { target: { value: 'example' } })
    // Simulate a key press event on the search input with the enter key
    fireEvent.keyPress(searchInput, { key: 'Enter', code: 13, charCode: 13 })

    // Perform an assertion to check if the 'useNavigate' function was called with the correct URL
    expect(navigateMock).toHaveBeenCalledWith('/search?keyword=example')
  })

  // Test case: Should perform a search on button click
  test('should perform a search on button click', () => {
    // Mock the 'useNavigate' hook
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock)
    // Render the 'Search' component
    render(<Search />)
    // Get the search input element
    const searchInput = screen.getByPlaceholderText('検索')

    // Simulate a change event on the search input with a value of 'example'
    fireEvent.change(searchInput, { target: { value: 'example' } })
    // Get the search button element
    const searchButton = screen.getByTestId('search-button')
    // Simulate a click event on the search button
    fireEvent.click(searchButton)

    // Perform an assertion to check if the 'useNavigate' function was called with the correct URL
    expect(navigateMock).toHaveBeenCalledWith('/search?keyword=example')
  })
})
