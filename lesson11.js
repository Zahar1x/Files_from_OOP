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
    cardList: [ {"num": '1111123232412'},
        {"num":'1111222233234444'},
        {"num":'1121224232323453'},
        {"num":'1363541323',}
        ],
    insertCard: function(caller) {
        mes(this, caller, 'попросил меня вставить карту');
        var r = L.rand(0, this.cardList.length - 1);
        var isWrongSide = L.rand(0,1);
        caller.takeCard(this, this.cardList[r], isWrongSide)},
    inputPin: function(caller) {
        mes(this, caller, 'попросил меня ввести ПИН-код');
        var codeList = ['1234', '2412'];
        var PIN = codeList[L.rand(0, codeList.length - 1)];
        caller.takePin(this, PIN);},
    chooseOperation: function(caller) {
        mes(this, caller, 'попросил меня выбрать операцию');

        caller.giveMoney(this);
    },
    inputSum: function(caller) {
        mes(this, caller, 'попросил меня ввести желаемую сумму');
        caller.giveSum(this, L.rand(1000, 100000));},
    takeMoney: function(caller) {
        mes(this, caller, 'попросил меня взять деньги');},
    takeCheck: function(caller) {
        mes(this, caller, 'попросил меня взять чек');},
    takeCard: function(caller) {
        mes(this, caller, 'попросил меня взять карту');},
    takeInfo: function (caller, info) {
        mes(this, caller, 'попросил меня ознакомиться со следующей информацией: «'+info+'»', "color: red");
    }
};

var server = {
    name: 'Сервер',
    color: 'blue',
    cardList: [ {"num": '1111123232412', "PIN":'1234', 'endDate': '06.10.2020'},
                {"num":'1111222233234444', "PIN":'2412', 'endDate': '31.12.2020'},
                {"num":'1111222234434445', "PIN":'2423'},
                {"num":'1111222233334444', "PIN":'2453'},
                {"num":'1111222233334444', "PIN":'2478'},
                {"num":'1111222233334444', "PIN":'3333'},],
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
        mes(this, caller, 'попросил меня проверить карту');
        var card = this.findCard(cardNum);
        var res = card ? true: false;
        caller.takeCardcheckRes(this, res);},
    checkPin: function(caller, cardNum, PIN) {
        mes(this, caller, 'попросил меня проверить ПИН-код');
        var card = this.findCard(cardNum);
        var res = false;
        if (card)
        {
            res = (card.PIN == PIN);
        }
        caller.takePinCheckRes(this, res);},
    checkSum: function(caller) {
        mes(this, caller, 'попросил меня проверить сумму');
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
        if (p < 5) {
            caller.takeInfo(this, 'Отстутствует связь с сервером');
        } else {
            caller.insertCard(this);
        }
    },
    takeCard: function(caller, card, isWrongSide) {
        mes(this, caller, 'попросил меня взять карту');
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
        mes(this, caller, 'попросил меня проверить карту');
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
        mes(this, caller, 'попросил меня получить результат проверки карты');
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
        mes(this, caller, 'попросил меня прринять ПИН-код');
        this.server.checkPin(this, this.card.num, PIN);},
    takePinCheckRes: function(caller, res) {
        mes(this, caller, 'попросил меня получить результат проверки ПИН-кода');
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
        mes(this, caller, 'попросил меня выдать деньги');
        caller.inputSum(this);
    },
    giveSum: function(caller, sum) {
        mes(this, caller, 'попросил меня выдать указанную сумму');
        this.checkSum(this), sum;
        this.server.checkSum(this);},
    checkSum: function(caller, sum) {
        mes(this, caller, 'попросил меня проверить наличие указанной суммы');
        return (sum < this.sum);
    },
    takeSumCheckRes: function(caller) {
        mes(this, caller, 'попросил меня получить результат проверки наличия указанной суммы');
        this.man.takeMoney(this);
        this.printCheck(this);
        this.card = null;
        this.man.takeCard(this);},
    printCheck: function(caller) {
        mes(this, caller, 'попросил меня распечатать чек');
        this.man.takeCheck(this);
    }
};

L.bodyView(`<h1>СНЯТИЕ ДЕНЕГ В БАНКОМАТЕ</h1>`);
ATM.start(man);

// var obj = {asf: 112};
// var i = 1;
// L.CL('i', i, obj, 'obj');
