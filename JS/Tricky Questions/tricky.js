console.log(typeof null);
 // object

 console.log(0.1 + 0.2 === 0.3);


// false beacuse of the resul is 0.3000000

console.log([] + []); //""
console.log([] + {}); // [object object]
console.log({} + []);// 0 

// because of operator coercion

console.log(typeof NaN);
// number

console.log([] == ![]);
// true

let c = {name: "Paras"};
let d = a;
a = null;
console.log(d);
 // {name : "paras"}

  function foo() {
  return
  {
    name: "Paras"
  }
}
console.log(foo());
// undefined because of automatially semicoone is added after the return



let a = {};
let b = {};
a[b] = 123;
console.log(a);
// {"[object object]":123}



(function() {
  var x = y = 5;
})();
console.log(typeof x);
console.log(typeof y);
// x : undefined y:number

