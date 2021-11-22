# The Observer Pattern
### This simple demo implements in JavaScript a version of the observer pattern. It essentially works like this:

There is an object (here it's the Square) called the Observable and it stores references to other objects that may each implement various functionality-- these are known as the Observers. When the state of the Observable (Square here) changes, it notifies (Publishes) all Oberserves of its change in state.