
let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItemInput = document.querySelectorAll('.expenses-item'),
    btnAccept1 = document.getElementsByTagName('button')[0],
    btnAccept2 = document.getElementsByTagName('button')[1],
    btnCalc = document.getElementsByTagName('button')[2],
    inputOptExp = document.querySelectorAll('.optionalexpenses-item'),
    inputOptInc = document.querySelector('#income'),
    checkBoxSav = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
};
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
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
    
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" & a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?"),
                b = prompt("Во сколько обойдется?", "");
    
            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" & a.length < 50) {
                console.log("done");
    
                appData.optionalExpenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", '');
            
            if (typeof(items) === 'string' && typeof(items) != null && items != "") {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что то ещё?'));
                appData.income.sort();
            } else {
                i = i -1 ; 
            }

            appData.income.forEach(function(item, i, mass) {
                console.log(i + ": " + item + " (Способы доп. заработка: " + mass + ')');
            });
            
            console.log(appData.income);
        }
        
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}




