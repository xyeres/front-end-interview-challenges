#### Modified example inspired by the book Head First Design Patterns published by O'Reily

The strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independantly from the clients that use it. 

Design principles: 
- `Identify the aspects of your application that vary and separate them from what stays the same`
In this case, the weapon behavior varies depending on what character class you are implementing. So we have an interface to abstract that behavior that is then implemented per-character subclass as needed. That way the original code in Character does not have to be modified when we add a new character
- `Program to an interface, not an implementation`
We program to the interface WeaponBehavior instead of creating repetitious implementations
- `Favor composition over inheritance`
We compose classes together throgh interfaces over using class inheritance, this creates more loosly coupled classes

