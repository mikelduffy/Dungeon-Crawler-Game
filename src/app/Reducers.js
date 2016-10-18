import {combineReducers} from 'redux';
import GameBoard from '../reducers/GameBoard';

const rootReducer = function() {
  return combineReducers({
    GameBoard,
  });
};

export default rootReducer;
