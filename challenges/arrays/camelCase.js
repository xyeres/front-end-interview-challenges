function toCamelCase(str) {
  if (str === "") return str;

  let result = "";

  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);

    if (c === "_" || c === "-") {
      let nextCharCode = str.charCodeAt(i + 1);
      if (nextCharCode > 90) {
        result += String.fromCharCode(nextCharCode - 32);
        // skip one character ahead
        // since we dont want this one in the result
        i++;
      }
    } else {
      result += c;
    }
  }

  return result;
}

console.log(toCamelCase("the_stealth_warrior"));
