import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", height: 0, age: 0 };
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;
//exports the actual user reducer
export default userSlice.reducer;
