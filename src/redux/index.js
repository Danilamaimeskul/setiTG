import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import rootSaga from './sagas';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

// export default store;
export {persistor, store};
