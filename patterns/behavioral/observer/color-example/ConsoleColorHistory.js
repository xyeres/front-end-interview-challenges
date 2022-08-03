export default class ConsoleColorHistory{
  constructor() {
    this.history = [];
  }

  update(model) {
    this.history.unshift(model.color);

    let msg = `The last ${this.history.length === 1 ? `color was` : `${this.history.length} colors were`}: `;

    for (let color of this.history) {
      msg += `${color.toUpperCase()} `;
    }
    if (this.history.length > 4) {
      this.history.splice(4)
    }
    console.log(msg)
  }
}