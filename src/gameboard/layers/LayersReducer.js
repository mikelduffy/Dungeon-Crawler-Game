// Imports

// Define layers
const layer1 = [];

const initialState = {
  map: layer1,
  number: 1,
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    // case NEXTLAYER: // Update layer map and number.
    //   return {
    //     ...state,
    //   };
    default:
      return {
        ...state,
      };
  }
}
