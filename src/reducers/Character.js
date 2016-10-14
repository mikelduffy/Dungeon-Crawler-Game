import playerImgAsset from '../assets/player.svg';

const initialState = {
  currentHealth: 100,
  maxHealth: 100,
  damage: 10,
  experience: 0,
  level: 0,
  levels: [10, 21, 33, 45, 57, 70, 85, 100],
  position: 12,
  visibleMap: [
    0, 0, 0, 0, 0,
    0, 1, 1, 1, 1,
    0, 1, 8, 2, 2,
    0, 1, 2, 2, 0,
    0, 1, 0, 2, 0,
  ],
  image: playerImgAsset,
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    // case MOVE: // Update position based on movement direction
    //   return {
    //     ...state,
    //   };
    // case PICKUPITEM: // If weapon, update damage, if health update health
    //   return {
    //     ...state,
    //   };
    // case DAMAGE: // Update user health
    //   return {
    //     ...state,
    //   };
    // case EXPERIENCEGAIN: // Update user experience
    //   return {
    //     ...state,
    //   };
    // case LEVELUP: // Update user level, maxHealth, and damage
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}
