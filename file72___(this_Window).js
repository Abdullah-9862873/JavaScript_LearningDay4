
// console.log(this);
// console.log(window);

// This will print the window in console

//___________________________________________________________
// function myFunc(){
//     console.log(this);
// }

// myFunc();

// When you write a function then the function is now the part of window... 
//___________________________________________________________


function myFunc(){
    console.log(this);
}

window.myFunc();

// As the funciton is now the part of window then you can call the function from window as (window.myFunc())... And here "this" keyword is representing windows as windows is calling myFunc().

//__________________________________________________________
// "use strict"
// function hello(){
//     console.log(this);
// }
// hello();

// If you dont't use "use strict" then it will throw "window" on console.

// The javaScript developers use "use strict" method in the file to avoid such thing...
