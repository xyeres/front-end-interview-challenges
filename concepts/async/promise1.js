function delay(ms) {
  return new Promise((resolve, reject) => {
    if (ms > 100) {
      setTimeout(() => resolve(`success after ${ms}ms`), ms)
    } else {
      reject(new Error('must delay longer than 100ms'))
    }
  })
}

delay(101).then((msg) => alert(msg)).catch (console.log);

let p1 = new Promise((resolve, reject) => resolve('sucess at parent'))

// is p1.then(f1, f2) === p1.then(f1).catch(f1)
function f1(msg) {
  console.log(msg)
  throw new Error('whoops!')
}

function f2(msg) {
  console.log(msg)
}


p1
  .then(f1, f2).catch((error) => {
    if (error instanceof ReferenceError) {
      console.log("We had a reference error")
    } else {
      throw error;
    }
  }).catch(err => {
    console.log(`We had a different kind of error: ${err.message}`)
  })


