/*В js Класс - это функция, которая создает объект    "Класс": new Object()
                                                                   String()
                                                                   Array()
                                                                   Function()
                                                                  */
//Функцию String можно использовать в режиме конструктора или конвертера типов
// var a = new String ('42');
// L.CL(L.t(L.CL(a)));
// var b = 42;
// var c = String(b); //Если вызов без new, то она просто конвертирует тип
// L.CL(L.t(L.CL(c)));


//Function тоже можно по разному использовать
// var f1 = function (x, y) {return x*y;}
// var f2 = new Function('x,y', 'return x*y;')
// L.CL(f1(10, 4));
// L.CL(f2(3, 4));


//Создание своего объекта
// var __obj = {a:1, b:2, c:3};// Прототип с __ в начале
// function F(x){this.value = x;}
// F.prototype = __obj;//Связали функцию с прототипом
// __obj.constructor = F;//И прототип с функцией
// var objF = new F(10);
// L.CL(objF);
// L.CL(objF.__proto__);

//Создадим свой класс строка
// var __str = {valueOf: function () {
//     var index = L.rand(0, (this.valueList.length - 1));
//     return this.valueList[index];
// }};
// function STR(x) {
//     this.valueList = x;
// }
// STR.prototype = __str;
// __str.constructor = STR;

// var str1 = new L.STR(['Привет Андрей', 'Младший лейтенант', 'мальчик', 'молодой']);
// L.CL(str1.valueOf());
// var str2 = new L.STR( ['Мир','World', 'Earth']);
// L.CL(str1.valueOf() + ' ' + str2.valueOf());
//
// // var __phrase = {
// //     valueOf: function () {
// //         var result = '';
// //         for(var i=0; i < this.wordList.length; i++)
// //         {
// //             result += this.wordList[i].valueOf();
// //         }
// //         return result;
// //     }
// // };
// // function Phrase(...x) {                 //Если мы хотим передавать динамическое кол-во параметров, то ставим троеточие перед явным параметром.
// //                                         // Теперь все что мы будем передавать в виде параметров будет записываться в единый массив х
// //     this.wordList = x.map((v)=>{var str = new STR(v); return str;});
// // }
// // Phrase.prototype =__phrase;
// // __phrase.constructor = Phrase;
//
// var phrase = new L.Phrase(['Привет', 'Hello'], [', '], ['Мир', 'World'], ['!!!'])
//
// L.CL(phrase.valueOf());
// L.bodyView('Юля, пару слов туда сюда скажи да');

var phrase = new L.Phrase (
    ['Мой', 'Наш'], [', '],
    ['дядя', 'батя','тятя'], [' '],
    ['самых','очень'], [' '],
    ['честных', 'чистых'], [' '],
    ['правил'], [', <br>'],
    ['Когда', ' тогдa'], [' '],
    ['не в шутку','серьезно','реально'], [' '],
    ['занемог.'], [' '],
    ['Он уважать','Он целовать', 'Везти в Тамбов'],[' '],
    ['себя'], [' '],
    ['заставил'], ['<br>'],
    ['и лучше','и хуже','и круче'], [' '],
    ['выдумать'],[' '],
    ['не смог.']
);
L.bodyView(phrase.chance());

var str = new L.STR(['дядя', 'батя','тятя']);
L.CL(str.chance());







