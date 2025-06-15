'use client'

import { useState, useEffect, useCallback } from 'react'

import type { IProduct } from '~/types/product'

interface UseListReturn {
  items: IProduct[]
  addItem: (item: IProduct, callback?: () => void) => void
  removeItem: (id: number, callback?: () => void) => void
  getItems: () => void
}

const useList = (storageKey: string): UseListReturn => {
  const [items, setItems] = useState<IProduct[]>([])

  const getItems = useCallback(() => {
    const storedItems = JSON.parse(sessionStorage.getItem(storageKey) || 'null')
    if (storedItems !== null) {
      setItems(storedItems)
    } else {
      setItems([])
    }
  }, [storageKey])

  const addItem = useCallback(
    (item: IProduct, callback?: VoidFunction) => {
      const newItems = [...items, item]
      setItems(newItems)
      sessionStorage.setItem(storageKey, JSON.stringify(newItems))

      if (callback) callback()
    },
    [items, storageKey]
  )

  const removeItem = useCallback(
    (id: number, callback?: VoidFunction) => {
      const newItems = items.filter((p) => p.id !== id)
      setItems(newItems)
      sessionStorage.setItem(storageKey, JSON.stringify(newItems))

      if (callback) callback()
    },
    [items, storageKey]
  )

  useEffect(() => {
    getItems()
  }, [getItems])

  return { addItem, getItems, items, removeItem }
}

export default useList
