function getSwapi() {
  fetch('https://swapi.dev/api/planets/4')
    .then(response => {
      return response.json()
    })
    .then(data => {
      const string = `
        ${data.name} is a ${data.climate} planet with an ${data.population}
        population count, the ${data.climate} terrain filled with ${data.terrain}.
        It rotaional period is ${data.rotation_period}
      `
      console.log(string)
      return { data, string }
    })
    //build the list on the html
    .then(buildHtmlElements)
    .then(data => console.log(data))
}

getSwapi()

function buildHtmlElements({ data, string }) {
  let root = document.getElementById('root')
  let p = document.createElement('p')
  p.innerText = string
  root.appendChild(p)
  return new Promise(resolve => resolve(data))
}