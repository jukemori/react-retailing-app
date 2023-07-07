// Import necessary dependencies and components
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './Navbar'

// Mock the CSS imports
jest.mock('./Navbar.css', () => ({}))
jest.mock('../search/Search.css', () => ({}))
jest.mock('../tabs/Tabs.css', () => ({}))

// Begin describing the test suite for the 'Navbar' component
describe('Navbar', () => {
  // Test case: Renders home, about, and contact links
  test('renders home, about, and contact links', () => {
    // Render the 'Navbar' component inside a 'BrowserRouter'
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    // Perform assertions to check if the expected links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  // Test case: Toggles navbar on menu icon click
  test('toggles navbar on menu icon click', () => {
    // Render the 'Navbar' component inside a 'BrowserRouter'
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    // Get the menu icon and the navbar elements
    const menuIcon = screen.getByTestId('menu-icon')
    const navElements = screen.getByTestId('nav-elements')

    // Simulate a click event on the menu icon
    fireEvent.click(menuIcon)

    // Assert that the navbar elements have the 'active' class after the click event
    expect(navElements).toHaveClass('active')

    // Simulate another click event on the menu icon
    fireEvent.click(menuIcon)

    // Assert that the navbar elements no longer have the 'active' class after the second click event
    expect(navElements).not.toHaveClass('active')
  })
})
