import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Cards } from './Cards'

jest.mock('./Cards.css', () => ({}))

interface Item {
  id: number
  image: string
  name: string
  like_count: number
  price: number
  is_sold_out: boolean
}

describe('Cards', () => {
  test('renders cards with correct details', () => {
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

    render(
      <MemoryRouter>
        <Cards items={mockItems} />
      </MemoryRouter>
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('¥1,000')).toBeInTheDocument()
    expect(screen.getByText('¥2,000')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()

    const item1Image = screen.getByAltText('Item 1')
    expect(item1Image).toHaveAttribute('src', 'image1.jpg')

    const item2Image = screen.getByAltText('Item 2')
    expect(item2Image).toHaveAttribute('src', 'image2.jpg')

    expect(screen.getByText('SOLD')).toBeInTheDocument()
  })

  test("renders '出品' button", () => {
    const mockItems: Item[] = []

    render(
      <MemoryRouter>
        <Cards items={mockItems} />
      </MemoryRouter>
    )

    expect(screen.getByText('出品')).toBeInTheDocument()
  })
})
