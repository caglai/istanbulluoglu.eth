import { createSlice } from '@reduxjs/toolkit'

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    numbersHidden: false,
    drawerOpen: false,
  },
  reducers: {
    toggleHideNumbers: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.numbersHidden = !state.numbersHidden;
    },
    toggleDrawer: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.drawerOpen = !state.drawerOpen;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleHideNumbers, toggleDrawer } = settingsSlice.actions

export default settingsSlice.reducer