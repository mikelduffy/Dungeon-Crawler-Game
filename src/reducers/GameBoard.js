import {PLAYER_MOVEMENT} from '../actions/GameBoard';
import * as helpers from '../helpers/GameBoard';

const initialMap = helpers.initialPopulatedMaps[0];

const initialState = {
  layerMap: initialMap.map,
  layerSize: initialMap.size,
  layerNumber: 1,
  characterCurrentHealth: 100,
  characterMaxHealth: 100,
  characterBaseDamage: 10,
  characterExperience: 0,
  characterLevel: 0,
  characterLevels: [10, 21, 33, 45, 57, 70, 85, 100],
  characterPosition: initialMap.map.indexOf(8),
  characterVisibleMap: helpers.generateVisibleMap(initialMap.map, initialMap.map.indexOf(8), initialMap.size),
  enemyCount: 1,
  enemyLocations: [],
  enemyHealth: 10,
  enemyBaseDamage: 3,
  bossLocation: [],
  bossHealth: 10,
  bossBaseDamage: 3,
  healthItemCount: 3,
  healthItemLocations: [],
  healthItemValue: 10,
  weaponItemCount: 1,
  weaponItemLocations: [],
  weaponItemBaseDamage: 10,
};

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

function playerMovement(state, action) {
  const updatedMap = helpers.handleMovement(action.event, state.layerMap, state.layerSize);
  return updateObject(state, {
    layerMap: updatedMap[0],
    characterPosition: updatedMap[1],
    characterVisibleMap: updatedMap[2],
  });
}

function gameBoardReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_MOVEMENT: {
      // console.log(playerMovement(state, action));
      return playerMovement(state, action);
    }
    default:
      return state;
  }
}

export default gameBoardReducer;
