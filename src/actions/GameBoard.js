export const PLAYER_MOVEMENT = 'PLAYER_MOVEMENT';

export const MovementDirections = {
  LEFT: 'LEFT',
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
};

// Action Creators
export function playerMovement(event) {
  return {type: PLAYER_MOVEMENT, event};
}
