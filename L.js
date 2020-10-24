var L= (function()
{
    var isDebugMode = false;
    var i = 0,
        log = function () {
        i++;
        if(publicAPI.isDebugMode) {
            console.log('Функция: ' + this.name + ' Счетчик: ' + i);
            }

        };

    var publicAPI =  {

            name:'Библиотека L.js',

            version: '2.0.0',


            CL: function CL(str)
            {
                console.log(str);
                log.call(CL);
                return str;

            },
            CGb: function CGb(str)
            {
                console.group(str);
                log.call(CGb);

            },
            CGe: function CGe()
            {
                console.groupEnd();
                log.call(CGe);

            },

            n: function (){return'Библиотека publicAPI.js';},

            k: () => {return '3.0.0'},

            randFuncGenerator: function (x, y) {


                return function (a=x, b=y) {

                    if(a > b)
                    {
                        console.error('Ошибочный интервал в функции генерации случайных чисел: '+a+', '+b+'.');
                        return undefined;
                    }
                    var n;
                    n = a + Math.round((b - a) * Math.random());
                    return n;
                };
            },

            rand: function (a, b) {
                var n;
                n = a + Math.round((b - a) * Math.random());
                L.CL(n);
                return n;
            },

        }
publicAPI.rand.description = 'Этот метод генерирует  случаные числа в заданом диапазоне'
publicAPI.randFuncGenerator.description = 'Этот метод генерирует метод, который генерирует случаные числа в заданом диапазоне'
    publicAPI.__defineGetter__('name', publicAPI.n);
    publicAPI.__defineGetter__('version', publicAPI.k);
    publicAPI.__defineSetter__('name',
        function (newName) {
            publicAPI.CL('Доступ запрещен');
            var elemBody = document.getElementsByTagName('body')[0];
            elemBody.innerHTML = '<h1>Impostor</h1>';
            elemBody.style.color = '#fc00bb'
            elemBody.style.backgroundColor = '#000000';
            elemBody.style.fontSize = '50px';

            return  newName;

        });
    publicAPI.__defineSetter__('version', function (newVersion) {publicAPI.CL('Доступ запрещен');});
    publicAPI.__defineSetter__('version', publicAPI.__lookupSetter__('name'));
    publicAPI.__defineSetter__('version', publicAPI.__lookupSetter__('version'));

    //Определение свойств материнского объекта
    Object.defineProperty(publicAPI, 'name',
        {
            //value: 'библиотека L.js',
            //writable: false,
            configurable: false,
            enumerable: false,
            set: publicAPI.__lookupSetter__('name'),
            get: publicAPI.__lookupGetter__('name')
        });
    Object.defineProperty(publicAPI, 'version',
        {
            //value: 'библиотека L.js',
            //writable: false,
            configurable: false,
            enumerable: false,
            set: publicAPI.__lookupSetter__('version'),
            get: publicAPI.__lookupGetter__('version')

        });
    Object.defineProperty(publicAPI, 'isDebugMode',
        {
            configurable: false,
            set: function (val) {
                isDebugMode = val;
            },
            get: function () {
                return isDebugMode;
            }
        });
    //Создание дочернего объекта
    var publicAPIChild = Object.create(publicAPI, {
        //Добавление новых свойств или методов
        date: {
            value: '17.10.2020',
            writable: false,
            configurable: false,
            enumerable: true
        },
        author: {
            value: 'М3О-235Б-19',
            writable: false,
            configurable: false,
            enumerable: true
        }


        });
publicAPIChild.PL = (function () {
        for (var key in this) {
            L.CL(key + '=' + this[key]);
        }
                                  }).bind(publicAPIChild);

publicAPIChild.PL.description = 'Этот метод выводит список всех свойств библиотеки L.js';

publicAPI.rand = publicAPI.randFuncGenerator(1, 10);

publicAPIChild.r

    return publicAPIChild;

}) ();
/*IIFE-Immediate invoke function expression
 (f(){})(); - Краткая запись
Паттерн модуль - возвращаем объект, в котором несколько функций

 */
   


