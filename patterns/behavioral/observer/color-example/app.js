import Square from './SquareModel.js';
import ElementObserver from './ElementObserver.js';
import ColorHistory from './ConsoleColorHistory.js';
import MessagesObserver from './MessagesObserver.js';

const square1 = new Square();
const messagesObs1 = new MessagesObserver('messages');
const colorHistoryObserver1 = new ColorHistory();
const squareElemObserver1 = new ElementObserver('square-observer');

// Subscribe element observer to add UI updating functionality
square1.subscribe(colorHistoryObserver1);
square1.subscribe(squareElemObserver1);
square1.subscribe(messagesObs1);

// Button that will update state on model
document.getElementById('increment-btn')
  .addEventListener('click', (e) => {
    square1.increment()
  })

