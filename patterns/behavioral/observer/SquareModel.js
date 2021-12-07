'use-strict';

export default class Square {
  constructor() {
    this.color = 'lightgreen';
    this.count = 0;
    this.observers = [];
  }

  // state change
  increment() {
    let colors = ['orange', 'red', 'blue', 'purple']
    this.count++;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.publish();
  }

  // push subscribers to array
  subscribe(o) {
    this.observers.push(o)
  }

  publish() {
    for (let o of this.observers) {
      // each subscriber implements update,
      // go ahead and call it to achieve whatever
      // functionality they have implemented
      o.update(this)
    }
  }

}