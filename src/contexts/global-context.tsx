'use client'

import { createContext, useState, useEffect, useCallback, useContext } from 'react'

import type { ReactElement, ReactNode } from 'react'
import type { IProduct } from '~/types/product'

interface GlobalContextType {
  addProductToCart: (product: IProduct, callback?: VoidFunction) => void
  cart: IProduct[]
  getCart: VoidFunction
  openInterstitial: boolean
  pushObject: (key: string, value: boolean, callback?: VoidFunction) => void
  removeProductToCart: (id: number, callback?: VoidFunction) => void
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

const GlobalProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [cart, setCart] = useState<IProduct[]>([])

  const [openInterstitial, setOpenInterstitial] = useState(false)

  const pushObject = useCallback((key: string, value: boolean, callback?: VoidFunction) => {
    if (key === 'open_interstitial') {
      setOpenInterstitial(value)
    }
    if (callback) callback()
  }, [])

  const getCart = useCallback(() => {
    const sessionStorageCart = JSON.parse(sessionStorage.getItem('cart') || 'null')

    if (sessionStorageCart !== null) {
      setCart(sessionStorageCart)
    } else {
      setCart([])
    }
  }, [])

  const addProductToCart = useCallback(
    (product: IProduct, callback?: VoidFunction) => {
      const newCart = [...cart]
      newCart.push(product)
      setCart(newCart)
      sessionStorage.setItem('cart', JSON.stringify(newCart))

      if (callback) callback()
    },
    [cart]
  )

  const removeProductToCart = useCallback(
    (id: number, callback?: VoidFunction) => {
      const newCart = [...cart]
      const productIndex = newCart.findIndex((p) => p.id === id)
      newCart.splice(productIndex, 1)
      setCart(newCart)
      sessionStorage.setItem('cart', JSON.stringify(newCart))

      if (callback) callback()
    },
    [cart]
  )

  useEffect(() => {
    getCart()
  }, [getCart])

  const contextValue: GlobalContextType = {
    addProductToCart,
    cart,
    getCart,
    openInterstitial,
    pushObject,
    removeProductToCart,
  }

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}

const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext)

  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }
  return context
}

export default GlobalContext

export { GlobalProvider, useGlobalContext }
