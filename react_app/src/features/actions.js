import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "No Actions found";
export const projectactionsSlice = createSlice({
  name: "projectactions",
  initialState: { value: initialStateValue },
  reducers: {
    addToTable: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToTable } = projectactionsSlice.actions;
//exports the actual user reducer
export default projectactionsSlice.reducer;
