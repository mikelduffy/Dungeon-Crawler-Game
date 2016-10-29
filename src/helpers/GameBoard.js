export const generateCoordinateMap = (map, size) => {
  const coordinateMap = [];
  let counter = 0;
  for (let row = 0; row < size[1]; row += 1) {
    for (let col = 0; col < size[0]; col += 1) {
      coordinateMap.push([map[counter], [col, row]]);
      counter += 1;
    }
  }
  return coordinateMap;
};

export const generateVisibleMap = (map, position, size) => {
  const coordinateMap = generateCoordinateMap(map, size);
  const visibleMap = [];
  for (let row = -2; row <= 2; row += 1) {
    for (let col = -2; col <= 2; col += 1) {
      const coordinateToCheck = [coordinateMap[position][1][0] + col, coordinateMap[position][1][1] + row];
      const outOfMapCol = (coordinateToCheck[0] < 0) || (coordinateToCheck[0] >= size[1]);
      const outOfMapRow = (coordinateToCheck[1] < 0) || (coordinateToCheck[1] >= size[0]);
      if (outOfMapCol || outOfMapRow) {
        visibleMap.push(9);
      } else {
        for (let i = 0; i < coordinateMap.length; i += 1) {
          if (JSON.stringify(coordinateMap[i][1]) === JSON.stringify(coordinateToCheck)) {
            visibleMap.push(coordinateMap[i][0]);
            break;
          }
        }
      }
    }
  }
  return visibleMap;
};

const layers = [
  {
    size: [11, 9],
    map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 8, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0,
      0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0,
      0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0,
      0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    stairsUpIndex: 12,
    stairsDownIndex: 86,
    numberOfEnemies: 3,
    numberOfHealth: 3,
    numberOfWeapons: 1,
    numberOfBosses: 0,
  },
  {
    size: [13, 13],
    map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0,
      0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0,
      0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 0, 0, 1, 8, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 2, 0, 0, 1, 1, 3, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    stairsUpIndex: 149,
    stairsDownIndex: 154,
    numberOfEnemies: 3,
    numberOfHealth: 3,
    numberOfWeapons: 1,
    numberOfBosses: 0,
  },
  {
    size: [20, 12],
    map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0,
      0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0,
      0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 3, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    stairsUpIndex: 112,
    stairsDownIndex: 201,
  },
  {
    size: [20, 26],
    map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 8, 2, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 3, 0,
      0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0,
      0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
      0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0,
      0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0,
      0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0,
      0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    stairsUpIndex: 38,
    stairsDownIndex: 98,
    numberOfEnemies: 3,
    numberOfHealth: 3,
    numberOfWeapons: 1,
    numberOfBosses: 0,
  },
  {
    size: [31, 25],
    map: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    stairsUpIndex: 356,
    stairsDownIndex: undefined,
    numberOfEnemies: 0,
    numberOfHealth: 3,
    numberOfWeapons: 1,
    numberOfBosses: 1,
  },
];

const getRandomNumber = (min, max) => {
  const Min = Math.ceil(min);
  const Max = Math.floor(max);
  return Math.floor(Math.random() * ((Max - 0) + 1)) + Min;
};

const generatePopulateMaps = () => {
  const openSpaceIndexes = [];
  for (let i = 0; i < layers[0].map.length; i += 1) {
    if (layers[0].map[i] === 1) {
      openSpaceIndexes.push(i);
    }
  }
  for (let i = 0; i < layers.length; i += 1) {
    for (let k = 0; k < layers[i].numberOfHealth; k += 1) {
      const random = getRandomNumber(0, openSpaceIndexes.length);
      layers[i].map[openSpaceIndexes[random]] = 2;
    }
    for (let k = 0; k < layers[i].numberOfWeapons; k += 1) {
      const random = getRandomNumber(0, openSpaceIndexes.length);
      layers[i].map[openSpaceIndexes[random]] = 3;
    }
    for (let k = 0; k < layers[i].numberOfEnemies; k += 1) {
      const random = getRandomNumber(0, openSpaceIndexes.length);
      layers[i].map[openSpaceIndexes[random]] = 4;
    }
    for (let k = 0; k < layers[i].numberOfBosses; k += 1) {
      const random = getRandomNumber(0, openSpaceIndexes.length);
      layers[i].map[openSpaceIndexes[random]] = 5;
    }
  }
  return layers;
};

export const initialPopulatedMaps = generatePopulateMaps();

export const handleMovement = (keyCode, map, size) => {
  const currentPosition = map.indexOf(8);
  const leftSpace = map[currentPosition - 1];
  const rightSpace = map[currentPosition + 1];
  const updatedMap = [...map];
  let updatedVisibleMap;
  switch (keyCode) {
    case 37:
      if (leftSpace === 1 || leftSpace === 2 || leftSpace === 3) {
        updatedMap[currentPosition - 1] = 8;
        updatedMap[currentPosition] = 1;
      }
      updatedVisibleMap = generateVisibleMap(updatedMap, updatedMap.indexOf(8), size);
      return [updatedMap, updatedMap.indexOf(8), updatedVisibleMap];
    case 38:
      // console.log('up');
      break;
    case 40:
      // console.log('down');
      break;
    case 39:
      if (rightSpace === 1 || rightSpace === 2 || rightSpace === 3) {
        updatedMap[currentPosition + 1] = 8;
        updatedMap[currentPosition] = 1;
      }
      updatedVisibleMap = generateVisibleMap(updatedMap, updatedMap.indexOf(8), size);
      return [updatedMap, updatedMap.indexOf(8), updatedVisibleMap];
    default:
  }
};
