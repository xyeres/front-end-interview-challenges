function generate(rows) {
  let result = [[1]];

  for (let i = 0; i < rows - 1; i++) {
    let row = [1];

    let last = result[result.length - 1];

    for (let j = 1; j < last.length; j++) {
      row.push(last[j - 1] + last[j]);
    }

    row.push(1);
    result.push(row);
  }
  return result
}

let rows = 58
let result = generate(rows)
console.log(result)
