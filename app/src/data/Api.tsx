import { useState, useEffect } from 'react'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

const BASE_URL = 'http://localhost:8000'

export function useItems (): any[] {
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await axios.get(`${BASE_URL}/items`)
        act(() => {
          setItems(response.data.data)
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData().catch((error) => {
      console.log(error)
    })
  }, [])

  return items
}

export function useItemById (id: number): any {
  const [item, setItem] = useState<any>(null)

  useEffect(() => {
    const fetchItem = async (): Promise<void> => {
      try {
        const response = await axios.get(`${BASE_URL}/items/${id}`)
        act(() => {
          setItem(response.data)
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchItem().catch((error) => {
      console.log(error)
    })
  }, [id])

  return item
}

export function useCategories (): any[] {
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const response = await axios.get(`${BASE_URL}/categories`)
        act(() => {
          setCategories(response.data.data)
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategories().catch((error) => {
      console.log(error)
    })
  }, [])

  return categories
}
