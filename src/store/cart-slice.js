import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const exisingItem = state.items.find((item) => item.id == newItem.id)
      state.totalQuantity++
      if (!exisingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        })
      } else {
        exisingItem.quantity++
        exisingItem.totalPrice = exisingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const exisingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      if (exisingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        exisingItem.quantity--
        // exisingItem.totalPrice = exisingItem.totalPrice - exisingItem.price;
      }
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
