import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      cartItems: [] 
  } ,
  reducers: {
    addItem: (state, action) => {
      const timeId = new Date().getTime();
      state.cartItems.push({
          id: timeId,
          dishId: action.payload.dish.id,
          name: action.payload.dish.name,
          price: action.payload.dish.price,
          quantity: action.payload.quantity
      })
    },

    removeItem: (state, action) =>{

      state.cartItems = state.cartItems.filter( item => item.dishId !== action.payload.cartItem.dishId )
    }
     
  }
  
})

export const  getCartItems = state => state.cart.cartItems;
export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer