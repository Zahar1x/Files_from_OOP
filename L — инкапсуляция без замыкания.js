var L=
    {
        i: 0,
        log: function(){
            console.log('Счетчик: ' +(++L.i));},
        name:"Библиотека L.js",
        CL: function(str)
        {
            console.log(str);
            L.log();
            return str;

        },
        CGb: function(str)
        {
            console.group(str);
            L.log();

        },
        CGe: function()
        {
            console.groupEnd();
            L.log();

        },
        n: function (){return'Библиотека L.js';}
    }
    L.__defineGetter__('name', L.n);
L.__defineSetter__('name',
    function (newName) {
        L.CL('Доступ запрещен');
        var elemBody = document.getElementsByTagName('body')[0];
           elemBody.innerHTML = '<h1>Impostor</h1>';
        elemBody.style.color = '#FC00BB'
        elemBody.style.backgroundColor = '#000000';
        elemBody.style.fontSize = '50px';

        return  newName;

    });
L.__defineSetter__('version', L.__lookupSetter__('name'));

