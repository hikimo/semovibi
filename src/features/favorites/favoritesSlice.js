import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: []
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      const newList = [
        ...state.list,
        action.payload
      ];
      
      return {
        ...state,
        list: newList
      };
    },
    setFavorites: (state, action) => ({
      ...state,
      list: action.payload
    })
  }
});

export const { addFavorites, setFavorites } = favoritesSlice.actions; 

export const selectFavorites = (state) => state.favorites.list;

export default favoritesSlice.reducer;