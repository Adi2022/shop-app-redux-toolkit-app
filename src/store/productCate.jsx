import { createSlice } from "@reduxjs/toolkit";
export const productCate = createSlice({
  name: "productCate",
  initialState: {
    selectedCategory: "all",
  },
  reducers: {
    filterCate(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const { filterCate } = productCate.actions;
export default productCate.reducer;
