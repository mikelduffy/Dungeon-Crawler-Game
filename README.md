# Dungeon Crawler Game

A Roguelike Dungeon Crawler Game built with React, React-bootstrap, and Redux.

## User Stories

1. I have health, a level, and a weapon. I can pick up a better weapon. I can pick up health items.
2. All the items and enemies on the map are arranged at random.
3. I can move throughout a map, discovering items.
4. I can move anywhere within the map's boundaries, but I can't move through an enemy until I've beaten it.
5. Much of the map is hidden. When I take a step, all spaces that are within a certain number of spaces from me are revealed.
6. When I beat an enemy, the enemy goes away and I get XP, which eventually increases my level.
7. When I fight an enemy, we take turns damaging each other until one of us loses. I do damage based off of my level and my weapon. The enemy does damage based off of its level. Damage is somewhat random within a range.
8. When I find and beat the boss, I win.
9. The game should be challenging, but theoretically winnable.

## Implementation Strategy

- Define layers
  - Static grid with walls, character, items, and enemies
  - Each layer is slightly bigger/more complex
  - 10 layers total
  - Stairs leading to next layer
- Define character
  - Character movements within walls
  - Character health and damage quantities
  - Character death
  - Character experience gain
  - Character level up
  - Character heath recharge
  - Character pick up new weapon
  - When character walks into enemy, damage is exchanged
- Define enemies
  - Health/damage levels increase per Dungeon layer
  - Statically enemy positions randomly within walls
  - Enemies occupy one grid square
  - Boss at layer 10
  - Boss occupies four grid squares
- Define Health and Weapon items
  - Set number of items per level
  - Set characteristics of items per Dungeon layer
  - Position items randomly
- UI
  - Character responds to up, down, left, and right arrow key movements
  - Center character and hide 70-80% of the level
  - When character walks into weapon or health item, item disappears and glow/pop updated health/damage levels
  - When character walks into enemy highlight damage exchange
  - Show enemy health level (where?)
  - When character walks on stairs, they go to next layer
  - When character kills enemy, enemy disappears
  - When character kills boss, boss disappears, and congratulations modal pops up
  - When character dies, death modal pops up
  - Display number of items and enemies in current layer?

## State Shape

layer: {
  map: [],
  number: 1,
}
character: {
  currentHealth: 100,
  maxHealth: 100,
  damage: 5,
  experience: 0,
  level: 0,
  position: [x,y],
}
items: {
  health: {
    count: 3,
    locations: [[x,y],[x,y]],
    value: 10,
    experience: 3,
  }
  weapon: {
    count: 1,
    locations: [[x,y]],
    damage: 10,
  }
}
enemies: {
  normal: {
    count: 1,
    locations: [[x,y], x,y],
    health: 10,
    damage: 3,
  }
  boss: {
    location: [x,y],
    health: 100,
    damage: 30,
  }
}
