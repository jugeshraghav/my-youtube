import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchCache: {},
  },
  reducers: {
    addToSearchCache: (state, { payload }) => {
      state.searchCache = { ...state.searchCache, ...payload };
    },
  },
});

export default searchSlice.reducer;
export const { addToSearchCache } = searchSlice.actions;
