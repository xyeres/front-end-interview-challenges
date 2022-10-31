

function findFirstUnique(arr) {
  const store = new Map()

  for (i = 0; i < arr.length; i++) {
    if (!store.has(arr[i])) {
        store.set(arr[i], 1)
    } else {
        store.set(arr[i], store.get(arr[i] + 1))
    }
  }

  for (let [key, val] of store.entries()) {
    if (val === 1) {
        return key
    }
  }
  
  return null
}
let a = [3, 5, 3, 10, 2, 10]
console.log(findFirstUnique(a))