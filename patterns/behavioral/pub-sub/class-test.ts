import { Subscribable } from "./Subscribable";

const sub = new Subscribable<string>()
const unsub = sub.subscribe(console.log)
sub.publish('hi there')
sub.publish('hi there')
unsub()
sub.publish('hi there')
sub.publish('hi there')
sub.publish('Bye')


class DataClass extends Subscribable<number> {
  constructor(public value: number) {
    super()
  }

  setValue(v:number) {
    this.value = v
    this.publish(v)
  }
}

const dc = new DataClass(0)
const dcUnsub = dc.subscribe((v:number)=> console.log(`DC: ${v}`))
const dcUnsub2 = dc.subscribe((v:number)=> console.log(`DC: ${v}`))
dc.setValue(123)