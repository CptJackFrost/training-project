let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц:", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц:", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдется?", "");
        
            if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
            }
            else {
                alert('Ошибка 1');
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            alert('Минимальный уровень достатка');
        }
        else if (appData.moneyPerDay < 2000) {
            alert('Средний уровень достатка');
        }
        else if (appData.moneyPerDay >= 2000) {
            alert('Высокий уровень достатка');
        }
        else {
            alert('Ошибка 2');
        }
    },
    checkSavings: function () {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", "");
            let percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function (){
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");
        
            if (typeof(a) != null && a != '' && a.length < 50) {
                appData.optionalExpenses[i] = a;
            }
            else {
                alert('Ошибка 1');
                i--;
            }
        }
    },
    chooseIncome: function() {
       let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
       if (items != null && items !=false && typeof(items) === 'string') {
           appData.income = items.split(', ');
    }

       let forgottenItem = prompt('Что-то еще?', '');
       if (forgottenItem != null && forgottenItem != false){
           appData.income.push(forgottenItem);
       }
       appData.income.sort();
       appData.income.forEach(function(item, i){
           alert('Способы доп. заработка: ' + (i+1) + ' : ' + item);
        });
    }
};

for (let key in appData) {
    console.log(appData[key]);
}

//appData.detectDayBudget();
//appData.detectLevel();
//appData.checkSavings();
//appData.chooseOptExpenses();