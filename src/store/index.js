//import { createStore,applyMiddleware } from 'redux';
//import rootReducer from './root-reducer';
//import logger from 'redux-logger'
//import { persistStore } from 'redux-persist'
//import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

//const rootReducer = combineReducers({
  //contacts: reducer
//})

//const persistConfig = {
  //  key: 'root',
    //storage,
    //whitelist: ['contacts']
//}

//const persistedReducer = persistReducer(persistConfig, rootReducer )
//const middleware = [logger]
//export const store = createStore(rootReducer, applyMiddleware(...middleware))
//export const persistor = persistStore(store)
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducer'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 

 export  let store = createStore(persistedReducer)
  export let persistor = persistStore(store)
 