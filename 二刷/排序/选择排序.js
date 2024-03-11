let array = [3, 24, 63, 9, 8];
/**
 * @param { Array } array
 */
function selectSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length; j++) {
      array[i] > array[j] ? ([array[i], array[j]] = [array[j], array[i]]) : "";
    }
  }
  console.log(array);
}

selectSort(array);
