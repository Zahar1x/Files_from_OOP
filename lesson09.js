// var c = {
//     next: function next() {
//         this.i++;
//         return this.i;
//     }
// }
//
// function Counter() {
//     this.i = 0;
// }
//
// L.CL(Counter.prototype);
//
// Counter.prototype = c;
// c.constructor = Counter;

// var propertyName = Symbol(`Название переменной
// для хранения знначения счетчика`)
//
// function Counter() {
//     this[propertyName] = 0;
//     this.__proto__[propertyName] = 0;
// }
//
// Counter.prototype.next = function next() {
//         this[propertyName]++;
//         this.__proto__[propertyName]++;
//         return this[propertyName];
// };

// (function (x, y) {
//     L.CL(x+y);

//
//     return x+y;
// })(7, 10);

//     var counter1 = new Counter();
// var counter2 = new Counter();
// L.CL(counter1.next());
// L.CL(counter1.next());
// L.CL(counter1.next());
// L.CL(counter2.next());
// L.CL(counter2.next());
// L.CL(counter1.__proto__.i);
// L.CL(counter2.__proto__.i);


//оператор rest на троеточие
// function f(x, y, ...z) {
//     L.CL('x = ' + x + ', y = ' + y + ', z = ' + z +', typeof(z) = ' + typeof(z));
// }
// f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//
// var a1 = [4, 5];
// var a2 = [1,2,3, a1, 8];
// L.CL(a2);
// //оператор spread
// var a3 = [1,2,3, ...a1, 8];
// L.CL(a3);


/*DOM*/
var nodeId = document.getElementById('header1');
L.CL(nodeId);
var nodeTags = document.getElementsByTagName('div')
L.CL(nodeTags);
var nodeClasses = document.getElementsByClassName('class1')
L.CL(nodeClasses);
var nodeClassList = document.getElementsByClassName('class1 class2')
L.CL(nodeClassList);
var nodeList = document.querySelectorAll('div');
L.CL(nodeList);
var nodeList = document.querySelectorAll('#test1');
L.CL(nodeList);
var nodeList = document.querySelectorAll('.class1');
L.CL(nodeList);
var nodeList = document.querySelectorAll('.class1 .class2');
L.CL(nodeList);
var nodeList = document.querySelectorAll('.class1 p.class2');
L.CL(nodeList);
var nodeList = document.querySelector('div');
L.CL(nodeList);


var nodeId = document.getElementById('header1');
L.CL(nodeId);
nodeId.innerHTML = 'Hello,<br> world';
nodeId.innerText = 'Hello,<br> world';











