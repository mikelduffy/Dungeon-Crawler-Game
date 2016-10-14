// Imports

const initialState = {
  normal: {
    count: 1,
    locations: [[], []],
    health: 10,
    damage: 3,
  },
};

export default function(state = initialState, {type, payload}) {
  switch (type) {
    // case DAMAGE: // Update enemy health
    //   return {
    //     ...state,
    //   };
    // case DEATH: // Remove enemy location
    //   return {
    //     ...state,
    //   };
    default:
      return {
        ...state,
      };
  }
}
