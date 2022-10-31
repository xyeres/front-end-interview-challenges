// For Loop Solution
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizz buzz", i);
  } else if (i % 3 == 0) {
    console.log("fiz", `(${i})`);
  } else if (i % 5 == 0) {
    console.log("buzz", i);
  }
}

// Ternary Expression Solution

// for (let i = 1; i <= 100; i++) {
//   i % 3 == 0 && i % 5 == 0 ? console.log("fizbuzz", i) : null;
//   i % 3 == 0 ? console.log("fizz", i) : null;
//   i % 5 == 0 ? console.log("buzz", i) : null;
// }
