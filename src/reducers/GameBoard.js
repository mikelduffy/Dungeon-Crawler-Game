import {PLAYER_MOVEMENT, MovementDirections} from '../actions/GameBoard';
import * as helpers from '../helpers/GameBoard';

const initialState = {
  layer: {
    map: helpers.layers[0].map,
    size: helpers.layers[0].size,
    number: 1,
  },
  character: {
    currentHealth: 100,
    maxHealth: 100,
    baseDamage: 10,
    experience: 0,
    level: 0,
    levels: [10, 21, 33, 45, 57, 70, 85, 100],
    position: 12,
    visibleMap: helpers.generateVisibleMap(helpers.layers[0].map, 12, helpers.layers[0].size),
  },
  enemies: {
    normal: {
      count: 1,
      locations: [],
      health: 10,
      baseDamage: 3,
    },
  },
  boss: {
    location: [],
    health: 10,
    baseDamage: 3,
  },
  items: {
    health: {
      count: 3,
      locations: [],
      value: 10,
      experience: 3,
    },
    weapon: {
      count: 1,
      locations: [],
      baseDamage: 10,
    },
  },
};

function gameBoardReducer(state = initialState, action) {
  switch (action.type) {
    case PLAYER_MOVEMENT:
      // console.log(action.event.keyCode);
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default gameBoardReducer;
