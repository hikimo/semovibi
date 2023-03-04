import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  list: []
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => ({
      ...state,
      list: action.payload
    }),
    startLoading: (state) => ({
      ...state,
      isLoading: true
    }),
    endLoading: (state) => ({
      ...state,
      isLoading: false
    })
  }
});

export const { setMovies, startLoading, endLoading } = moviesSlice.actions; 

export const selectMovies = (state) => state.movies.list;
export const selectIsLoading = (state) => state.movies.isLoading;

export default moviesSlice.reducer;