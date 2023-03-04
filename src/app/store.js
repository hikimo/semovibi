import { configureStore } from "@reduxjs/toolkit";
import movieReduer from "../features/movies/moviesSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";

export default configureStore({
  reducer: {
    movies: movieReduer,
    favorites: favoritesReducer
  }
});