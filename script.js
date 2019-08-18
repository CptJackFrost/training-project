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
    savings: true
};


function chooseExpenses(){
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
}

//chooseExpenses();

/*  let i = 0;
    while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");

    if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    }
    else {
        alert('Ошибка 1');
        i--;
    }
    i++;
} */

/*  let i = 0;
    do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");

    if (typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
    }
    else {
        alert('Ошибка 1');
        i--;
    }
    i++;
} while (i < 2); */

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
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
}

detectLevel();

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?", "");
        let percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

//checkSavings();

function chooseOptExpenses(){
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
}

chooseOptExpenses();