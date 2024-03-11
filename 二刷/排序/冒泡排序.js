let array = [3, 24, 63, 9, 8];

function bubbleUp(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      array[j] > array[j + 1]
        ? ([array[j + 1], array[j]] = [array[j], array[j + 1]])
        : "";
    }
  }
  return array;
}

function bubbleUp1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      array[j] > array[j + 1]
        ? ([array[j + 1], array[j]] = [array[j], array[j + 1]])
        : "";
    }
  }
  return array;
}

console.log(bubbleUp1(array));
