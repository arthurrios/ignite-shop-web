'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface CartItem {
  priceId: string
  name: string
  priceInCents: number
  imageUrl: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (
    priceId: string,
    imageUrl: string,
    name: string,
    priceInCents: number,
  ) => void
  removeCartItem: (productId: string) => void
  clearCart: () => void
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

  function addToCart(
    priceId: string,
    imageUrl: string,
    name: string,
    priceInCents: number,
  ) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.priceId === priceId)

      if (productInCart) {
        return state.map((item) => {
          if (item.priceId === priceId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          } else {
            return { ...item }
          }
        })
      } else {
        return [
          ...state,
          {
            priceId,
            imageUrl,
            name,
            priceInCents,
            quantity: 1,
          },
        ]
      }
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@ignite-shop:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  function removeCartItem(priceId: string) {
    if (cartItems.length === 1) {
      setCartItems([])
    } else {
      setCartItems((state) => {
        return state.filter((item) => item.priceId !== priceId)
      })
    }
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{ items: cartItems, addToCart, removeCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
