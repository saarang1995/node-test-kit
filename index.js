export const Runner = {
  add: (x, y) => {
    return x + y;
  },
  sub: (x, y) => {
    return x - y;
  },
  migratoryBirdProblem: (length, arr) => {
    const hash = new Map();
    arr.forEach((element) => {
      if (hash.has(element)) {
        let count = hash.get(element);
        hash.set(element, ++count);
      } else {
        hash.set(element, 1);
      }
    });

    const arrayOfValues = Array.from(hash.values());
    const arrayOfKeys = Array.from(hash.keys());

    const maxValue = Math.max(...arrayOfValues);
    const matchingKeys = [];
    arrayOfKeys.forEach((key) => {
      if (hash.get(key) == maxValue) {
        matchingKeys.push(key);
      }
    });
    return Math.min(...matchingKeys);
  },
  merger: (totalTime, parts) => {
    // check if length is greater than or equal to 2
    if (parts.length < 2) {
      return totalTime;
    }
    // sort array in ascending order
    parts.sort((part1, part2) => part1 - part2);
    // add first two
    const newPartSize = parts[0] + parts[1];
    totalTime += newPartSize;
    // replace first two from array with sum found
    parts = parts.slice(2);
    parts.unshift(newPartSize);
    // re start merger
    Runner.merger(totalTime, parts);
  },
};
let totalRuns = 0;
function merger(totalTime, parts) {
  // check if length is greater than or equal to 2
  if (parts.length < 2) {
    return totalTime;
  }
  // sort array in ascending order
  parts.sort((part1, part2) => part1 - part2);
  totalRuns++;
  // add first two
  const newPartSize = parts[0] + parts[1];
  totalTime += newPartSize;
  // replace first two from array with sum found
  parts = parts.slice(2);
  parts.unshift(newPartSize);
  // re start merger
  return merger(totalTime, parts);
}

function minimumDistance(area) {
  // Write your code here
  // 1 -> road ahead
  // 0 -> no road
  // 9 -> destination

  // find index of 9
  for (let i = 0; i < area.length; i++) {
    const row = area[i];
    const destinationLocation = row.indexOf(9);
    if (!destinationLocation) {
    }
  }

  let totalDistance = 0;
  for (let i = 0; i < area.length; i++) {
    const row = area[i];

    if (i > 0) {
      totalDistance++;
    }
    for (let j = 1; j < row.length; j++) {
      switch (row[j]) {
        case 0: {
        }
      }
      if (row[j] == 0) {
        break;
      }
      if (row[j] == 1) {
        totalDistance++;
      }
      if (row[j] == 9) {
        totalDistance++;
        i = area.length;
        break;
      }
    }
  }
  return totalDistance;
}

const distance = minimumDistance([
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1],
]);

console.log(distance);
