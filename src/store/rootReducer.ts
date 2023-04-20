import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './user/user.slice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], // The reducer that will be persisted
}

const rootReducer = combineReducers({
  user: userReducer,
})

export default persistReducer(persistConfig, rootReducer)
