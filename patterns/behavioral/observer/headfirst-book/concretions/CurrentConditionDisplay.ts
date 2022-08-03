import { DisplayElement } from "../interfaces/DisplayElement";
import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";

export class CliDisplay implements Observer, DisplayElement {
  private _temp: number = 0;
  private _weatherData: Subject;

  constructor(weatherData: Subject) {
    // For conveinence and later use
    this._weatherData = weatherData;
    // Register instance with Observer
    weatherData.registerObserver(this);
  }

  // Implements DisplayElement Interface
  display(): void {
    console.log(`Currently F${this._temp} degrees and balmy!`);
  }

  // Implements Observer Interface
  update(temp: number) {
    this._temp = temp;
    this.display();
  }
}
