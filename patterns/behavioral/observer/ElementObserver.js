export default class ElementObserver {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
  }

  update(model) {
    this.element.innerHTML = model.count;
    this.element.style.backgroundColor = model.color;
  }
}