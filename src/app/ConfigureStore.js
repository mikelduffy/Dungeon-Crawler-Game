import {createStore} from 'redux';
import GameBoard from '../reducers/GameBoard';

export default createStore(
  GameBoard,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
