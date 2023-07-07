import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './Navbar'

jest.mock('./Navbar.css', () => ({}))
jest.mock('../search/Search.css', () => ({}))
jest.mock('../tabs/Tabs.css', () => ({}))

describe('Navbar', () => {
  test('renders home, about, and contact links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  test('toggles navbar on menu icon click', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    const menuIcon = screen.getByTestId('menu-icon')
    const navElements = screen.getByTestId('nav-elements')

    fireEvent.click(menuIcon)

    expect(navElements).toHaveClass('active')

    fireEvent.click(menuIcon)

    expect(navElements).not.toHaveClass('active')
  })
})
