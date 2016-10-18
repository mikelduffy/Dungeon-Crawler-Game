export const generateCoordinateMap = (map, numberOfColumns, numberOfRows) => {
  const coordinateMap = [];
  let counter = 0;
  for (let row = 0; row < numberOfRows; row += 1) {
    for (let col = 0; col < numberOfColumns; col += 1) {
      coordinateMap.push([map[counter], [col, row]]);
      counter += 1;
    }
  }
  return coordinateMap;
};

export const generateVisibleMap = (map, position, numberOfColumns, numberOfRows) => {
  const coordinateMap = generateCoordinateMap(map, numberOfColumns, numberOfRows);
  const visibleMap = [];
  for (let row = -2; row <= 2; row += 1) {
    for (let col = -2; col <= 2; col += 1) {
      const coordinateToCheck = [coordinateMap[position][1][0] + col, coordinateMap[position][1][1] + row];
      const outOfMapCol = (coordinateToCheck[0] < 0) || (coordinateToCheck[0] >= numberOfColumns);
      const outOfMapRow = (coordinateToCheck[1] < 0) || (coordinateToCheck[1] >= numberOfRows);
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
