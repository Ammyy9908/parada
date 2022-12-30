import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  nav: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState: intialState,
  reducers: {
    setNav: (state, action) => {
      state.nav = action.payload;
    },
  },
});

export const { setNav } = navSlice.actions;

export const selectNav = (state) => state.nav.nav;

export default navSlice.reducer;
