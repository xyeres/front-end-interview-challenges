function Human(name, age) {
  this.name = name;
  this.age = age;
};

function Man(name, age) {
  // write code here
};

// write code here

function check() {
  var obj = new Man("Tommy Tan");
  console.log(obj.name)
  console.log(obj instanceof Human)
}
check()


/**
 * Solution:
 * 

function Man(name, age) {
  Human.call(this, name, age);
};

  // write code here

  Man.prototype = Object.create(Human.prototype)
  // fix constructor
    
  Man.prototype.construct 


 */