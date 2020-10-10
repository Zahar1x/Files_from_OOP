L.CL(L.n());
L.CL(L.name);
L.name = 'JHKFS';
L.CL(L.name);


/*Инкапсуляция*/
function incapsulation_example(k) {
    if(k < 1 || k > 10) { k=10; }
    var i = k;
    function numToStr(i) {
        var  a = ['Один', 'Двое', 'Трое', 'Четверо', 'Пять', 'Шестеро', 'Семеро', 'Восемь', 'Девять', 'Десять'];
        return a[i-1];
    }
    return function (){
        L.CGb(i);
        var t;
        if(i > 1) {
            t = numToStr(i) + ` поросят пошли купаться в море.
        ` + numToStr(i) + ` поросят резвились на просторе.
        Один из них утонул, ему сковали гроб.
        И вот вам результат ` +numToStr( (--i)) +` поросят.`;
            L.CL(t);
            L.CGe();
        }
        else {
            t = ` Один поросенок пошел купаться в море.
Один поросенок резвился на просторе.
Но он не утонул. Нашел себе свинью.
И вот вам результат ${k} поросят.`
            i = k;
            L.CL(t);
            L.CGe();
        }
    }

}

f = incapsulation_example(10);
for(let i = 1; i <= 10; i++)
{
    f();
}

