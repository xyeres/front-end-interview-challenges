// What is the output of this code?

length = 10;
function Func() {
  console.log(this.length);
}

var obj = {
  length: 5,
  thisFunc: function (func) {
    func();
    console.log(arguments[0]());
  }
};

let f1 = new Func();
f1.name = 'mc'
console.log(Object.keys(f1))
// obj.thisFunc(f1, 3);