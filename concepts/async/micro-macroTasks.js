// learn more about async priority: 
// https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec

const timer1 = setTimeout(() => {
  console.log('timer1');
  
  const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
  })
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
  setTimeout(()=> {
    console.log('timer between promises')
  }, 0)

  const promise3 = Promise.resolve().then(() => {
    console.log('promise3')
  })
}, 0)

const timer2 = setTimeout(() => {
  console.log('timer2')
  const timer4 = setTimeout(() => {
    console.log('timer4')
  }, 0)
}, 0)