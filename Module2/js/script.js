
// function multiply(mul1) {
//   var mul2 = function(x) {
//     	return mul1 * x;
//     };

//      return mul2;
//  }
// var a = multiply(8);
// console.log(a(1));
// var b = multiply(2);
// console.log(b(72));

// // function mul(x) {
// // 	return x * x;
// // }
// // console.log(mul(8));

// function doop(x, operation) {
// 	return operation(x);
// }

// var res = doop(3, a);
// console.log(res);
// var resl = doop(3185, b);
// console.log(resl);


// function sum(x, y){
//     a = x + y;
//     b = x - y;
//     c = x * y;
//     d = x / y;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// };

// sum(8 , 6);

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();


var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);