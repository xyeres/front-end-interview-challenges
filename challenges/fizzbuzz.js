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
