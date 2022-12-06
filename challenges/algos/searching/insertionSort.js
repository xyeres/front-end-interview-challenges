function insertionSort(arr) {
  let i, j, key;

  for (i = 1; i < arr.length; i++) {
    key = arr[i];

    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr = [40,3, 6, 11, 12, 5];
let result = insertionSort(arr);

console.log(result);
