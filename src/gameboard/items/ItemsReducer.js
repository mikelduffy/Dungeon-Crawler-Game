// Imports

const initialState = {
  health: {
    count: 3,
    locations: [[], []],
    value: 10,
    experience: 3,
  },
  weapon: {
    count: 1,
    locations: [[], []],
    damage: 10,
  },
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    // case ITEMPICKEDUP: // Remove item location and decrease item count
    //   return {
    //     ...state,
    //   };
    default:
      return {
        ...state,
      };
  }
}
