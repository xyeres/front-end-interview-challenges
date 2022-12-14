var reformatNumber = function (number) {
  var numbers = number.replaceAll("-", "").replaceAll(" ", "").split("");

  var result = [];

  while (numbers.length > 0) {
    if (numbers.length === 2 || numbers.length === 3) {
      result.push(numbers.splice(0, numbers.length));
    }

    if (numbers.length === 4) {
      result.push(numbers.splice(0, 2));
      result.push(numbers.splice(0, 2));
    }

    if (numbers.length > 3) {
      let group = numbers.splice(0, 3);
      result.push(group);
    }
  }
  return result.map((n) => n.join("")).join("-");
};

console.log(reformatNumber("9964-"));
