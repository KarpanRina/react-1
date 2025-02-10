import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import postsReducer from './slice/postsSlice'
import notesReducer from './slice/notesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    notes: notesReducer,
    posts: postsReducer,
  },
})