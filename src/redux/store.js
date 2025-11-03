// Store de Redux usando Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducer"; // Reducer raíz (maneja tasks)

// Crea y exporta el store 
export default configureStore({
  reducer: taskReducer,
});
