let array = [3, 24, 63, 9, 8];
/**
 *
 * @param { Array } array
 */
function qksort(array) {
  sort(array, 0, array.length - 1);
  console.log(array);
}
/**
 *
 * @param {Array} array
 */
function sort(array, low, high) {
  if (low < high) {
    let mid = partition(array, low, high);
    sort(array, low, mid - 1);
    sort(array, mid + 1, high);
  } else {
    return;
  }
}

function partition(array, low, high) {
  let pivot = array[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }
  [array[i], array[high]] = [array[high], array[i]];
  return i;
}

qksort(array);
