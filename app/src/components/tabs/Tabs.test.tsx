import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Tabs } from './Tabs'

jest.mock('./Tabs.css', () => ({}))
jest.mock('../../data/Api', () => ({
  useCategories: jest.fn(() => [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' }
  ])
}))

describe('Tabs', () => {
  test('renders tabs with active class for the current location', () => {
    render(
      <MemoryRouter initialEntries={['/category/2']}>
        <Tabs />
      </MemoryRouter>
    )

    expect(screen.getByText('すべて')).toBeInTheDocument()
    expect(screen.getByText('Category 1')).not.toHaveClass('active')
    expect(screen.getByText('Category 2')).toHaveClass('active')
  })
})
