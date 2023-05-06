import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productCate from './productCate'
export const store = configureStore({
  reducer: {
    cart:cartSlice,
    cate:productCate,
  },
})

