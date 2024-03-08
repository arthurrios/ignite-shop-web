import axios from 'axios'

interface CheckoutItems {
  price: string
  quantity: number
}

export async function postCheckoutSession(checkoutItems: CheckoutItems[]) {
  try {
    const response = await axios.post('/api/checkout', {
      checkoutItems,
    })

    return response.data.checkoutUrl
  } catch (error) {
    throw new Error('Error during checkout.')
  }
}
