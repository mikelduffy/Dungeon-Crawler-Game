import {createStore} from 'redux';
import makeRootReducer from './Reducers';

export default createStore(
  makeRootReducer(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
