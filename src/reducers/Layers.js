// Imports

// Define layers
const layer1 = {
  size: [11, 9],
  map: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 8, 1, 1, 6, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 5, 1, 0,
    0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0,
    0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 6, 1, 0, 1, 1, 1, 0,
    0, 1, 1, 0, 1, 1, 1, 1, 6, 4, 0,
    0, 4, 1, 1, 1, 1, 0, 1, 1, 2, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  startingIndex: 12,
  stairsUpIndex: undefined,
  stairsDownIndex: 86,
};

const initialState = {
  map: layer1.map,
  size: layer1.size,
  number: 1,
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    // case NEXTLAYER: // Update layer map and number.
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
}
