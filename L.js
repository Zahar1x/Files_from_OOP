var L= (function()
{
    var i = 0,
    log = function() {
    console.log('Счетчик: ' +(++i));};
            var publicAPI =  {

            name:"Библиотека L.js",
            CL: function(str)
            {
                console.log(str);
                log();
                return str;

            },
            CGb: function(str)
            {
                console.group(str);
                log();

            },
            CGe: function()
            {
                console.groupEnd();
                log();

            },
            n: function (){return'Библиотека publicAPI.js';}
        }

    publicAPI.__defineGetter__('name', publicAPI.n);
    publicAPI.__defineSetter__('name',
        function (newName) {
            publicAPI.CL('Доступ запрещен');
            var elemBody = document.getElementsByTagName('body')[0];
            elemBody.innerHTML = '<h1>Impostor</h1>';
            elemBody.style.color = '#FC00BB'
            elemBody.style.backgroundColor = '#000000';
            elemBody.style.fontSize = '50px';

            return  newName;

        });
    publicAPI.__defineSetter__('version', publicAPI.__lookupSetter__('name'));
    return publicAPI;
}) ();
/*IIFE-Immediate invoke function expression
 (f(){})(); - Краткая запись
Паттерн модуль - возвращаем объект, в котором несколько функций

 */
   


