import { useState, useEffect } from 'react'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

const BASE_URL = 'http://localhost:8000'

// Custom hook for fetching items
export function useItems (): any[] {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        // Send a GET request to the server to fetch items
        const response = await axios.get(`${BASE_URL}/items`)
        act(() => {
          // Update the items state with the fetched data
          setItems(response.data.data)
        })
      } catch (error) {
        // Log any errors that occur during the fetch
        console.log(error)
      }
    }

    // Fetch data when the component mounts
    fetchData().catch((error) => {
      console.log(error)
    })
  }, [])

  // Return the items state
  return items
}

// Custom hook for fetching an item by its ID
export function useItemById (id: number): any {
  const [item, setItem] = useState<any>(null)

  useEffect(() => {
    const fetchItem = async (): Promise<void> => {
      try {
        // Send a GET request to the server to fetch the item by ID
        const response = await axios.get(`${BASE_URL}/items/${id}`)
        act(() => {
          // Update the item state with the fetched data
          setItem(response.data)
        })
      } catch (error) {
        // Log any errors that occur during the fetch
        console.log(error)
      }
    }

    // Fetch data when the ID prop changes
    fetchItem().catch((error) => {
      console.log(error)
    })
  }, [id])

  // Return the item state
  return item
}

// Custom hook for fetching categories
export function useCategories (): any[] {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        // Send a GET request to the server to fetch categories
        const response = await axios.get(`${BASE_URL}/categories`)
        act(() => {
          // Update the categories state with the fetched data
          setCategories(response.data.data)
        })
      } catch (error) {
        // Log any errors that occur during the fetch
        console.log(error)
      }
    }

    // Fetch data when the component mounts
    fetchCategories().catch((error) => {
      console.log(error)
    })
  }, [])

  // Return the categories state
  return categories
}
