// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   items: Array<any>;
//   totalAmount: number;
//   totalQuantity: number
// }

// const initialState: CounterState = {
//   items: [],
//   totalAmount: 0,
//   totalQuantity: 0,
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     addToCart: (state, actions: PayloadAction<any>) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.totalQuantity += actions.payload.quantity
//     },
//     removeFromCart: (state, actions: PayloadAction<any>) => {
//       console.log(actions)
//     },
//     clearCart: (state) => {
//       state = initialState
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const cartActions  = counterSlice.actions

// export default counterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  // other state properties...
  totalQuantity: number;
  totalPrice: number
}

const initialState: CartState = {
  // other initial state values...
  totalQuantity: 0,
  totalPrice: 0,
}

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<number>) => {
//       state.totalQuantity += action.payload;
//     },
//     updateTotalPrice: (state, action: PayloadAction<number>) => {
//       state.totalPrice += action.payload;
//     },
//     // other reducers...
//   },
// })

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.totalQuantity += action.payload;
    },
    updateTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },
    resetCart: (state) => {
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});


export const { addToCart, updateTotalPrice, resetCart,  } = cartSlice.actions;

export default cartSlice.reducer;