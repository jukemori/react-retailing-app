import { render, screen, fireEvent } from '@testing-library/react'
import { Search } from './Search'
import { useNavigate } from 'react-router-dom'

jest.mock('./Search.css', () => ({}))
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

describe('Search', () => {
  test('should render the search input', () => {
    render(<Search />)
    const searchInput = screen.getByPlaceholderText('検索')
    expect(searchInput).toBeInTheDocument()
  })

  test('should perform a search on enter key press', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock)
    render(<Search />)
    const searchInput = screen.getByPlaceholderText('検索')

    fireEvent.change(searchInput, { target: { value: 'example' } })
    fireEvent.keyPress(searchInput, { key: 'Enter', code: 13, charCode: 13 })

    expect(navigateMock).toHaveBeenCalledWith('/search?keyword=example')
  })

  test('should perform a search on button click', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock)
    render(<Search />)
    const searchInput = screen.getByPlaceholderText('検索')

    fireEvent.change(searchInput, { target: { value: 'example' } })
    const searchButton = screen.getByTestId('search-button')
    fireEvent.click(searchButton)

    expect(navigateMock).toHaveBeenCalledWith('/search?keyword=example')
  })
})
