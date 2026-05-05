function curriedAdd(a) {
    return function addFirst(b) {
      return function addSecond(c) {
        return a + b + c;
      }
    }
}

curriedAdd(1)(2)(3);

 const addFirst = curriedAdd(1);
 const addSecond = addFirst(2);
 const result = addSecond(3);
 console.log('Result:', result);

 

