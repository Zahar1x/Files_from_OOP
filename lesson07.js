// f.apply(obj, [1,2,3,4]); получает на вход обьект и его парамтеры в виде массива
// f1 = f.bind(obj); Если не передаем аргументы кроме obj, то за f1 жестко закрепляется this на obj

//  var obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5,
//     f: function () {
//         for (var key in this) {
//             L.CL(key + '=' + this[key]);
//         }
//     }
// }
//
// obj.f();
// // obj.f.call(console);
// // f1 = obj.f.bind(console);
// L.PL();
// L.PL.call(obj);

/*Стрелочные функции*/
/* В стрелочных функциях this неизменный, он определяется контекстом, в котором вызвана эта функция*/
// var f = (n) => n*n;
// L.CL(f(6));
// var ff = (a, b) => a+b;
// L.CL(ff(345, 23));
//
// var fff = (a, b, c) => {
//     var d = a + c - b;
// L.CL(d);
// return d; };
//
// fff(2345, 45, 6);
// var f1 = () => L.CL(this);
// var obj1 = {f: f1};
// f1();
// obj1.f();
// f1.call(obj1);
// var f2 = f1.bind(obj1);
// f2();
//
//
// Math.random();
// L.CL(Math.random());
//
//
// // var r = function (a, b) {
// //     var n;
// //     n = a + Math.round((b - a) * Math.random());
// //     return n;
// // };
// var f10 = L.randFuncGenerator(1,10);
//
// for (var i=1; i<=10; i++)
//     L.CL(f10());


/*Наследование*/
//Object
var obj = new Object({a:1, b:2});
L.CL(obj);
L.CL(Object.prototype);
L.CL(obj.__proto__);
L.CL(Object.prototype == obj.__proto__);
L.CL(obj.__proto__.__proto__);

//String
var str = new String('Hello');
L.CL(str.__proto__.__proto__ == obj.__proto__ );
L.CL(obj.constructor.prototype.__proto__);
L.CL(str.constructor.prototype.__proto__);
L.CL(str.constructor);

//Array
var arr = new Array([1,2,3,4]);
L.CL(arr);
L.CL(arr.constructor);
L.CL(arr.constructor.prototype);

//Function
L.CL(Object.__proto__);


//Цепочка прототипов - все что выводили L.CL(obj.constructor.prototype.__proto__);
























