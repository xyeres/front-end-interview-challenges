// from https://medium.com/codeburst/the-simple-rules-to-this-in-javascript-35d97f31bde3

// Rule 1
// If new keyword use, this is a new object
function rule1() {
  this.greeting = 'hi'
  console.log(this.greeting)
}

let f1 = new rule1();

// Rule 2
// If apply, call or bind is used, this is the object that was passed as argument
function rule2() {
  console.log(this);
}
var obj = {
  value: 5
};
var boundFn = rule2.bind(obj);
boundFn();     // -> { value: 5 }
rule2.call(obj);  // -> { value: 5 }
rule2.apply(obj); // -> { value: 5 }

// Rule 3
// If function is called as method, using dot notation, this is the object to the left of the dot
let rule3 = {
  secret: 42,
  fn: function rule3() {
    console.log(this)
  }
}

rule3.fn()

// Rule 4
// If free function invocation, this is the global obj (window, global)
function rule4() {
  this.greeting = "rule 4"
  console.log(this.greeting)
}
console.log(this)
rule4()

// Rule 5
// If this is used in an arrow-function, all above rules no longer apply, look
// where the arrow function is created (defined) and go one line above, that's what this is
// defined by
const rule5 = {
  value: 'abc',
  createArrowFn: function() {
      return () => console.log(this);
  }
};
const arrowFn = rule5.createArrowFn();
arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }
