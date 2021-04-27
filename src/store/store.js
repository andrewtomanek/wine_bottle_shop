import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import storeBuilderReducer from "./reducers/storeBuilder";
import orderReducer from "./reducers/order";
import authReducer from "./reducers/auth";
import { watchAuth, watchStoreBuilder, watchOrder } from "./sagas";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  storeBuilder: storeBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchStoreBuilder);
sagaMiddleware.run(watchOrder);

export default store;
