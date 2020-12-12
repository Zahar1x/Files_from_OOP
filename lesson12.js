

var __man = {
    name: 'Человек',
    color: 'green',
    cardList: [],
    insertCard: function(caller) {
        L.mes(this, caller, 'попросил меня вставить карту');
        var r = L.rand(0, this.cardList.length - 1);
        var isWrongSide = L.rand(0,1);
        caller.takeCard(this, this.cardList[r], isWrongSide)},
    inputPin: function(caller) {
        L.mes(this, caller, 'попросил меня ввести ПИН-код');
        var codeList = ['1234', '2412'];
        var PIN = codeList[L.rand(0, codeList.length - 1)];
        caller.takePin(this, PIN);},
    chooseOperation: function(caller) {
        L.mes(this, caller, 'попросил меня выбрать операцию');

        caller.giveMoney(this);
    },
    inputSum: function(caller) {
        L.mes(this, caller, 'попросил меня ввести желаемую сумму');
        caller.giveSum(this, L.rand(1000, 100000));},
    takeMoney: function(caller) {
        L.mes(this, caller, 'попросил меня взять деньги');},
    takeCheck: function(caller) {
        L.mes(this, caller, 'попросил меня взять чек');},
    takeCard: function(caller) {
        L.mes(this, caller, 'попросил меня взять карту');},
    takeInfo: function (caller, info) {
        L.mes(this, caller, 'попросил меня ознакомиться со следующей информацией: «'+info+'»', "color: red");
    }
};

var __server = {
    name: 'Сервер',
    color: 'blue',
    cardList: [],
    findCard:
        function findCard (cardNum)
        {
            var card_i;
            for( var i=0;i < this.cardList.length; i++)
            {
                card_i = this.cardList[i];
                if(cardNum ==card_i.num )
                {
                    return card_i;
                }
            }
        },
    checkCard: function(caller, cardNum) {
        L.mes(this, caller, 'попросил меня проверить карту');
        var card = this.findCard(cardNum);
        var res = card ? true: false;
        caller.takeCardcheckRes(this, res);},
    checkPin: function(caller, cardNum, PIN) {
        L.mes(this, caller, 'попросил меня проверить ПИН-код');
        var card = this.findCard(cardNum);
        var res = false;
        if (card)
        {
            res = (card.PIN == PIN);
        }
        caller.takePinCheckRes(this, res);},
    checkSum: function(caller) {
        L.mes(this, caller, 'попросил меня проверить сумму');
        caller.takeSumCheckRes(this);}

};



var __ATM = {
    name: 'Банкомат',
    server: __server,
    color: 'red',
    sum: 50000,
    operationList: ['Take, Give', 'Pay', 'ShowRest'],
    start: function(caller) {
        this.man = caller;
        var p = L.rand(1, 100);
        if (p < 5) {
            caller.takeInfo(this, 'Отстутствует связь с сервером');
        } else {
            caller.insertCard(this);
        }
    },
    takeCard: function(caller, card, isWrongSide) {
        L.mes(this, caller, 'попросил меня взять карту');
        this.card = card;
        if(this.checkCard(this, card, isWrongSide))
        {
            this.server.checkCard(this, card.num);
        }
        else
        {
            this.card = null;
            caller.takeCard(this);
        }
    },
    checkCard: function(caller, card, isWrongSide) {
        L.mes(this, caller, 'попросил меня проверить карту');
        if(isWrongSide)
        {this.man.takeInfo(this, 'Карта вставлена неверно');
            return false;
        }

        if(card.num.length != 16)
        {
            this.man.takeInfo(this, 'Вы вставили не ту карту');
            return false;
        }
        return true;
    },
    takeCardcheckRes: function(caller, res) {
        L.mes(this, caller, 'попросил меня получить результат проверки карты');
        if(!res)
        {
            this.man.takeInfo(this,'Вставлена карта не того банка');
            this.man.takeCard(this);
        }
        else{
            this.man.inputPin(this);
        }
    },
    takePin: function(caller, PIN) {
        L.mes(this, caller, 'попросил меня прринять ПИН-код');
        this.server.checkPin(this, this.card.num, PIN);},
    takePinCheckRes: function(caller, res) {
        L.mes(this, caller, 'попросил меня получить результат проверки ПИН-кода');
        if(res)
        {
            this.man.chooseOperation(this)
        }
        else
        {
            this.man.takeInfo(this, 'ПИН-код введен неверно');
        }
    },
    giveMoney: function(caller) {
        L.mes(this, caller, 'попросил меня выдать деньги');
        caller.inputSum(this);
    },
    giveSum: function(caller, sum) {
        L.mes(this, caller, 'попросил меня выдать указанную сумму');
        this.checkSum(this), sum;
        this.server.checkSum(this);},
    checkSum: function(caller, sum) {
        L.mes(this, caller, 'попросил меня проверить наличие указанной суммы');
        return (sum < this.sum);
    },
    takeSumCheckRes: function(caller) {
        L.mes(this, caller, 'попросил меня получить результат проверки наличия указанной суммы');
        this.man.takeMoney(this);
        this.printCheck(this);
        this.card = null;
        this.man.takeCard(this);},
    printCheck: function(caller) {
        L.mes(this, caller, 'попросил меня распечатать чек');
        this.man.takeCheck(this);
    }
};

function Man(name, cardList) {
    this.name = name;
    this.cardList = cardList;
}

Man.prototype = __man;
__man.constructor = Man;

//Банкомат
function ATM(name, server, sum) {
this.name = name;
this.server = server;
this.sum = sum;
}
ATM.prototype = __ATM;
__ATM.constructor = ATM;

//Банкомат 'Модель 1000'
function ATMModel_1(name, server, sum) {
    ATM.call(this, name, server, sum);
    this.modelName = 'Модель 1000';
}
ATMModel_1.prototype = new ATM(null,null,null);
ATMModel_1.prototype.checkCardNum = function (caller, cardNum) {
    L.mes(this, caller, 'попросил меня проверить первые 4 цифры карты, для проверки принадлежности карты нашему банку');
    var res = true;
    if(cardNum.slice(0, 4) != this.server.cardNumPrefix)
    {
        res = false;
    }
    return res;
};
ATMModel_1.prototype. takeCard =
    function(caller, card, isWrongSide) {
        L.mes(this, caller, 'попросил меня взять карту');
        this.card = card;
        if ( this.checkCardNum(caller, this.card.num)) {

            if(this.checkCard(this, card, isWrongSide) ) {
                 this.man.inputPin(this);
            }
        }
        else
        {
            caller.takeInfo(this, 'карта не принадлежит нашему банку');
            this.card = null;
            caller.takeCard(this);
        }
    }
ATMModel_1.prototype.takePinCheckRes = function(caller, res) {
   this.__proto__.takePinCheckRes.call(this, caller, res);
   this.man.takeInfo(caller, 'Ваша карта останется в банкомате, для возврата карты обратитесь в банк');
}



function Server(name, cardList, cardNumPrefix) {
this.name = name;
this.cardList = cardList;
this.cardNumPrefix = cardNumPrefix;
}

Server.prototype = __server;
__server.constructor = Server;

var o_man = new Man('Человек 1',
    [{"num": '11421123232412'},
        {"num":'1111222233234444'},
        {"num":'1121224232323453'},
        {"num":'1363541323',}]);


var o_server = new Server('Сервер 1', [
    {"num":'1111123232412125', "PIN":'1234', 'endDate': '06.10.2020'},
    {"num":'1111222233234444', "PIN":'2412', 'endDate': '31.12.2020'},
    {"num":'1111222234434445', "PIN":'2423'},
    {"num":'1111222233334444', "PIN":'2453'},
    {"num":'1111222233334444', "PIN":'2478'},
    {"num":'1111222233334444', "PIN":'3333'},
], '1111' );

var o_ATM = new ATM('Банкомат 1', o_server, 50000);
var o_ATMModel_1 = new ATMModel_1('Банкомат 2', o_server, 60000);

L.bodyView(`<h1>СНЯТИЕ ДЕНЕГ В БАНКОМАТЕ</h1>`);
// o_ATM.start(o_man);
o_ATMModel_1.start(o_man);


L.CL(o_ATMModel_1);
L.CL(o_man);
L.CL(o_ATM);
L.CL(o_server);