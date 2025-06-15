'use client'

import { createContext, useState, useEffect, useCallback, useContext } from 'react'

import type { ReactElement, ReactNode } from 'react'
import type { IProduct } from '~/types/product'

import useList from '~/hooks/useList'

interface ListContextType<T> {
  addItem: (item: T, callback?: VoidFunction) => void
  items: T[]
  getItems: VoidFunction
  removeItem: (id: number, callback?: VoidFunction) => void
}

const ListContext = createContext<ListContextType<IProduct> | undefined>(undefined)

const ListProvider = ({ children, storageKey }: { children: ReactNode; storageKey: string }): ReactElement => {
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
      const newItems = [...items]
      newItems.push(item)
      setItems(newItems)
      sessionStorage.setItem(storageKey, JSON.stringify(newItems))

      if (callback) callback()
    },
    [items, storageKey]
  )

  const removeItem = useCallback(
    (id: number, callback?: VoidFunction) => {
      const newItems = [...items]
      const itemIndex = newItems.findIndex((p) => p.id === id)
      newItems.splice(itemIndex, 1)
      setItems(newItems)
      sessionStorage.setItem(storageKey, JSON.stringify(newItems))

      if (callback) callback()
    },
    [items, storageKey]
  )

  useEffect(() => {
    getItems()
  }, [getItems])

  const contextValue: ListContextType<IProduct> = {
    addItem,
    getItems,
    items,
    removeItem,
  }

  return <ListContext.Provider value={contextValue}>{children}</ListContext.Provider>
}

const useListContext = (): ListContextType<IProduct> => {
  const context = useContext(ListContext)

  if (context === undefined) {
    throw new Error('useListContext must be used within a ListProvider')
  }
  return context
}

export {
  ListProvider,
  useListContext,

  // CartContext.tsx
}

interface CartContextType {
  items: IProduct[]
  addItem: (item: IProduct, callback?: () => void) => void
  removeItem: (id: number, callback?: () => void) => void
  getItems: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const cart = useList('cart')

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// WishlistContext.tsx

interface WishlistContextType {
  items: IProduct[]
  addItem: (item: IProduct, callback?: () => void) => void
  removeItem: (id: number, callback?: () => void) => void
  getItems: () => void
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export const WishlistProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const wishlist = useList('wishlist')

  return <WishlistContext.Provider value={wishlist}>{children}</WishlistContext.Provider>
}

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
