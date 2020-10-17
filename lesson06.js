/*THIS*/
// var f = function (z= 1 ){
//     // this.name = 'qqq';
//     L.CL( this);
//     L.CL(z);
// };
// f();
//
// var a = {
//     name: 'a',
//     ff: f
// };
//
// a.ff();
//
// var b = {
//     name: 'b',
//     fff: f
// };
//
// b.fff();
//
// var c = {
//     name: 'c'
// };
//
// b.fff.call(c, 7);

// var obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     fff: function () {
//         for (var key in this)
//         {
//             L.CL(key + '=' + this[key]);
//         }
//     }
// }
//
// obj1.fff();
//
// var obj2 = {
//     x: 10,
//     y: 11,
//     z: 12,
// }
// obj1.fff.call(obj2);
// obj1.fff.call(L);
function f1() {
    L.CL(f1.name);
}
f1();
L.CGb(1);
L.CL(2);
L.CGe();
L.isDebugMode = true;
L.CL(L.author);