import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const exisingItem = state.items.find((item) => item.id == newItem.id)
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
    removeItemFromCart() {},
  },
})
