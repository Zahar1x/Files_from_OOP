
function mes(thisObj, caller, text, style) {
    var styleP='';
    var styleSpan = '';
    styleSpan = "style = 'font-weight: bold; color:" + thisObj.color +";'";
    var callerName = caller.name;
    var thisObjName = thisObj.name;
    if(callerName == thisObjName){
        callerName = 'Я';
        text= text.replace('меня', 'себя');
    }
    if(style)
    {
        styleP = " style ='" + style +";'";
    }
    L.bodyView('<p ' + styleP +'><span' + styleSpan +'>' + thisObjName.toUpperCase() + ':</span> ' +
        callerName+ ' ' + text +'.</p>');
}

var man = {
    name: 'Человек',
    color: 'green',
    cardList: [ {"num": '1111132232412', "PIN":'1234'},
                {"num":'1111222233334444', "PIN":'2412'}],
    insertCard: function(caller) {
        mes(this, caller, 'попросил меня вставить карту');
        caller.takeCard(this)},
    inputPin: function(caller) {
        mes(this, caller,
        'попросил меня ввести ПИН-код');
        caller.takePin(this);},
    chooseOperation: function(caller) {
        mes(this, caller,
            'попросил меня выбрать операцию');
        caller.giveMoney(this);
        },
    inputSum: function(caller) {
        mes(this, caller,
            'попросил меня ввести желаемую сумму');
        caller.giveSum(this);},
    takeMoney: function(caller) {
        mes(this, caller,
            'попросил меня взять деньги');},
   takeCheck: function(caller) {
        mes(this, caller,
            'попросил меня взять чек');},
    takeCard: function(caller) {
        mes(this, caller,
            'попросил меня взять карту');},
    takeInfo: function (caller, info) {
        mes(this, caller,
            'попросил меня ознакомиться со следующей информацией: «'+info+'»', "color: red");
    }
};

var server = {
    name: 'Сервер',
    color: 'blue',
    checkCard: function(caller) {
        mes(this, caller,
            'попросил меня проверить карту');
        caller.takeCardcheckRes(this);},
    checkPin: function(caller) {
        mes(this, caller,
            'попросил меня проверить ПИН-код');
        caller.takePinCheckRes(this);},
    checkSum: function(caller) {
        mes(this, caller,
            'попросил меня проверить сумму');
    caller.takeSumCheckRes(this);}

};



var ATM = {
    name: 'Банкомат',
    server: server,
    color: 'red',
    sum: 50000,
    start: function(caller) {
        this.man = caller;
        var p = L.rand(1, 100);
        if (p < 30) {
            caller.takeInfo(this, 'Отстутствует связь с сервером');
        } else {
            caller.insertCard(this);
        }
    },
    takeCard: function(caller) {
        mes(this, caller,
        'попросил меня взять карту');
        this.checkCard(this);
        this.server.checkCard(this)},
    checkCard: function(caller) {
        mes(this, caller,
            'попросил меня проверить карту')},
    takeCardcheckRes: function(caller) {
        mes(this, caller,
            'попросил меня получить результат проверки карты');
        this.man.inputPin(this);},
    takePin: function(caller) {
        mes(this, caller,
            'попросил меня прринять ПИН-код');
        this.server.checkPin(this);},
    takePinCheckRes: function(caller) {
        mes(this, caller,
            'попросил меня получить результат проверки ПИН-кода');
        this.man.chooseOperation(this)},
    giveMoney: function(caller) {
        mes(this, caller,
            'попросил меня выдать деньги');
        caller.inputSum(this);
        },
    giveSum: function(caller) {
        mes(this, caller,
            'попросил меня выдать указанную сумму');
        this.checkSum(this);
        this.server.checkSum(this);},
    checkSum: function(caller) {
        mes(this, caller,
            'попросил меня проверить наличие указанной суммы')},
    takeSumCheckRes: function(caller) {
        mes(this, caller,
            'попросил меня получить результат проверки наличия указанной суммы');
        this.man.takeMoney(this);
        this.printCheck(this);
        this.man.takeCard(this);},
    printCheck: function(caller) {
        mes(this, caller,
            'попросил меня распечатать чек');
    this.man.takeCheck(this);
    }
};


var counter1 = new L.Counter();
L.CL(counter1.next());



L.bodyView(`<h1>СНЯТИЕ ДЕНЕГ В БАНКОМАТЕ</h1>`);
ATM.start(man);













