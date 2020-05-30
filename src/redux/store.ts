import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
