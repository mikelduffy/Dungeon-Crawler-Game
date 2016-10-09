import {combineReducers} from 'redux';
import Character from '../gameboard/character/CharacterReducer';
import Enemies from '../gameboard/enemies/EnemiesReducer';
import Items from '../gameboard/items/ItemsReducer';
import Layers from '../gameboard/layers/LayersReducer';

const rootReducer = function() {
  return combineReducers({
    Character,
    Enemies,
    Items,
    Layers,
  });
};

export default rootReducer;
