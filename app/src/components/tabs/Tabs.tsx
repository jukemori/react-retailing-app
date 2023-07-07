import { NavLink, useLocation } from 'react-router-dom'
import { useCategories } from '../../data/Api'
import './Tabs.css'

export function Tabs (): JSX.Element {
  // Fetch the list of categories
  const categories = useCategories()

  // Get the current location from react-router
  const location = useLocation()

  // Extract the current pathname from the location
  const { pathname } = location

  // Split the pathname into an array of segments
  const splitLocation = pathname.split('/')

  return (
    <div className="tabs">
      <div className="tabs-container">
        <ul>
          {/* Render the tab for "All" category */}
          <li className={splitLocation[1] === '' ? 'active' : ''} key="all">
            <NavLink to="/">すべて</NavLink>
          </li>

          {/* Map over the categories and render a tab for each category */}
          {categories.map((category) => (
            <li
              className={
                splitLocation[3] === String(category.id) ? 'active' : ''
              }
              key={category.id}
            >
              <NavLink to={`/category/${String(category.id)}`}>
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
