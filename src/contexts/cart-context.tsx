'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CartItem {
  priceId: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: string) => void
  removeCartItem: (productId: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-shop:cart-items-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  function addToCart(priceId: string) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.priceId === priceId)

      if (productInCart) {
        return state.map((item) => {
          if (item.priceId === priceId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { priceId, quantity: 1 }]
      }
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@ignite-shop:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  function removeCartItem(priceId: string) {
    setCartItems((state) => {
      return state.filter((item) => item.priceId === priceId)
    })
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
