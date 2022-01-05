// Solution provided by
// https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b

const list = ['q', 'a', 'z', 'w', 's', 'x', 'e', 'd', 'c', 'r']

const quicksort = list => {
  if (list.length < 2) return list;

  let pivot = list[0];
  let left = [];
  let right = [];

  for (let i = 1, total = list.length; i < total; i++) {
    if (list[i] < pivot) {
      left.push(list[i]);
    } else {
      right.push(list[i])
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
};

console.log(quicksort(list))