let fizz = document.querySelector('.fizz');

for (var i = 0; i < 101; i++) {
  if (i > 0) {
    if (i % 3 == 0 && i % 5 == 0) {
      fizz.innerHTML += `<li>${i} - fizzbuzz</li>`
    } else if (i % 3 == 0) {
      fizz.innerHTML += `<li>${i} - fizz</li>`;
    } else if (i % 5 == 0) {
      fizz.innerHTML += `<li>${i} - buzz`;
    } 
    fizz.innerHTML += `<li>${i}</li>`
  }
}

// Ternary Expression Solution

for (let i =1; i <= 100; i++) {
  i % 3 == 0 && i % 5==0 ? console.log('fizbuzz', i) : null
  i % 3 == 0 ? console.log('fizz', i) : null 
  i % 5 == 0 ? console.log('buzz', i) : null
}