import { compose, legacy_createStore as createStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storageSession from 'redux-persist/lib/storage/session';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers());
// const store = createStore(rootReducer, composeEnhancers());

export default store;

export const persistor = persistStore(store);
