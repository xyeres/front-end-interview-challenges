import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";

export class WeatherData implements Subject {
  private _observers: Observer[] = [];
  private _temp: number = 60;

  registerObserver(o: Observer): void {
    this._observers.push(o);
  }

  removeObserver(o: Observer): void {
    const i = this._observers.indexOf(o);
    if (i >= 0) {
      this._observers.splice(i, 1);
    }
  }

  notifyObservers(): void {
    for (let o of this._observers) {
      o.update(this._temp);
    }
  }

  // We will use this to set the new temps because
  // we're not using a 3rd party API for this demonstration
  updateTemp(newTemp: number) {
    this._temp = newTemp;
    this.notifyObservers();
  }
}
