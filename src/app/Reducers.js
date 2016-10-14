import {combineReducers} from 'redux';
import Character from '../reducers/Character';
import Enemies from '../reducers/Enemies';
import Items from '../reducers/Items';
import Layers from '../reducers/Layers';

const rootReducer = function() {
  return combineReducers({
    Character,
    Enemies,
    Items,
    Layers,
  });
};

export default rootReducer;
