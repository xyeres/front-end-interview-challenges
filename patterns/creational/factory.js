
/**
 * The factory pattern is a creational pattern that provides a template that can be 
 * used to create objects. It is used in complex situations where the type of the 
 * object required varies and needs to be specified in each case.
 * 
 * As the name “factory” implies, we can use this pattern when we want to create  
 * different objects that have some similar characteristics. Let’s look at an example 
 * to understand this better.
 */

class ToyFactory {
  constructor() {
    this.toy = ToyDuck; //toy property set to ToyDuck by default

    this.createToy = function (params) {
      if (params.toyType === 'car') {
        this.toy = ToyCar;

      } else if (params.toyType === 'duck') {
        this.toy = ToyDuck;
      }

      return new this.toy(params);
    }
  }

}

class ToyDuck {
  constructor(params) {
    this.color = params.color;
    this.price = params.price;
  }
}

class ToyCar {
  constructor(params) {
    this.color = params.color;
    this.price = params.price;
    this.name = params.name;
  }
}




var toyFactory = new ToyFactory();

var car = toyFactory.createToy({
  toyType: "car",
  color: "blue",
  price: 12,
  name: "honda"
})

var duck = toyFactory.createToy({
  toyType: "duck",
  color: "yellow",
  price: 5,
})

console.log(car)
console.log(car instanceof ToyCar)

console.log(duck)
console.log(duck instanceof ToyDuck)