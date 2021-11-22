export default class MessagesObserver {
  constructor(elementId) {
    this.parentElement = document.getElementById(elementId);
  }

  update(model) {
    let li = document.createElement('li')
    li.innerText = `Color updated to ${model.color}`;
    this.parentElement.prepend(li);
    if (this.parentElement.childElementCount > 5) {
      this.parentElement.lastChild.remove()
    }
  }
}