const Module = (function () {
  var myModule = {}
  var _privateMethod = function () {
    // does private method stuff
  }

  myModule.publicMethod = function () {
    // does public method stuff
    // has access to private methods and can call it
  }
  myModule.someOtherMethod = function () {
    // Does other public method stuff
    // has access to private methods and can call it
  }
  return myModule;
}());

// Usage
Module.publicMethod();
