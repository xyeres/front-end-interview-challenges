function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

delay(3000).then(() => console.log('runs after 3 seconds'));



// The importance of keeping the chain alive:
const delayedMessage = (msg, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(msg), ms)
  })
}

delayedMessage('a message', 300)
  .then(msg => {
    console.log(msg)
    return msg
  })
  .then(msg => new Promise((resolve, reject) => {
    // as a rule of thumb, when you run an async function in the chain, 
    // besure it returns a new Promise so that the result will be
    // available later in the chain
    let altMsg = msg + ' --an alternate ending!'
    setTimeout(() => {
      console.log(altMsg)
      resolve(altMsg) //  here we resolve this async function and pass the result
    }, 1200)
  }))
  .then(msg => {
    console.log(msg + ' and some sneaky stuff down here!')
    return msg
  })



// Below is an example of taking a classic callback style function
// and making it promise driven

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}


// Create promise wrapper for our old school callback load script 
function loadScriptPromisification(src) {
  return new Promise((resolve, reject) => {
    loadScript(src, (err, script) => {
      if (err) reject(err)
      else resolve(script)
    })
  })
}