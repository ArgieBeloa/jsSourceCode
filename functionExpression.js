/*
   function expression = function without a name (anonymous function)
                        avoid polluting the global scope with names
                        write it, then forget about it.

*/
   //example
   const greeting = function () {
    console.log("hello user")
   }
   greeting()