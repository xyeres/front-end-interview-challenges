/**
 * WITHOUT CLOSURE *
 * this works ok but its inefficient, more confusing,
 * and the event handler has to read a DOM attribute
 * each time its fired. Would be nice to remember
 * this value
 */

// var APIEndpoints = {
//   planets:
//     'https://swapi.dev/api/planets',
// }

// async function makeRequest(e) {
//   var btn = e.target
//   var recordKind = btn.dataset.kind
//   const res = await fetch(APIEndpoints[recordKind])
//   const data = await res.json()
//   document.body.innerHTML = data.results[0].name
// }

// const btn = document.getElementById('btn')
// btn.addEventListener('click', makeRequest)


/**
 * WITH CLOSURE *
 * With this approach the data-kind attr. is
 * retrieved once and assigned to the recordKind var 
 * at initial setup, recordKind is then closed over
 * by the inner makeRequest() click handler,
 * and its value is used on each evt. firing
 * to look up the URL and data that should be sent.
 * 
 * By putting recordKind inside setupButtonHandler
 * we limit the scope expsoure of that variable to a more approrpiate
 * subtset of the program; storing it globally
 * would have been worse for the code organization
 * and readability. 
 * 
 * we also close around the api endpoint as well
 */

// var APIEndpoints = {
//   planets:
//     'https://swapi.dev/api/planets',
// }

// function setupButtonHandler(btn) {
//   var recordKind = btn.dataset.kind
//   var requestURL = APIEndpoints[recordKind]

//   btn.addEventListener(
//     'click',
//     async function makeRequest(envt) {
//       const res = await fetch(requestURL)
//       const data = await res.json()
//       const resultDiv = document.getElementById('result')
//       resultDiv.innerHTML = data.results[Math.floor(Math.random() * data.results.length)].name
//     }
//   )
// }

// const btn = document.getElementById('btn')
// setupButtonHandler(btn)

/**
 * FURTHER IMPROVEMENTS *
 * RequestURL inputs are provided ahead of time, resulting in the
 * makeReqyest() partially applied function, which we locally
 * label 'handler'
 * 
 * This is similar behavior as before but it is easier to read and maintain
 * And makes defineHandler more reuseable in other parts of the program 
 */

var APIEndpoints = {
  planets:
    'https://swapi.dev/api/planets',
}

function defineHandler(requestURL) {
  return async function makeRequest(e) {
    const res = await fetch(requestURL)
    const data = await res.json()
    const resultDiv = document.getElementById('result')
    resultDiv.innerHTML = data.results[Math.floor(Math.random() * data.results.length)].name
  }
}

function setupButtonHandler(btn) {
  var recordKind = btn.dataset.kind
  var handler = defineHandler(
    APIEndpoints[recordKind]
  )
  btn.addEventListener('click', handler)
}


const btn = document.getElementById('btn')
setupButtonHandler(btn)