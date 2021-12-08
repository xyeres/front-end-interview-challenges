
// For Loop Solution
for (var i = 0; i < 101; i++) {
  if (i > 0) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('fizbuzz')
    } else if (i % 3 == 0) {
      console.log('fizz')
    } else if (i % 5 == 0) {
      console.log('buzz')
    } 
  }
}

// Ternary Expression Solution

for (let i =1; i <= 100; i++) {
  i % 3 == 0 && i % 5==0 ? console.log('fizbuzz', i) : null
  i % 3 == 0 ? console.log('fizz', i) : null 
  i % 5 == 0 ? console.log('buzz', i) : null
}