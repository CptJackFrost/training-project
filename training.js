/* function calc (a, b) {
    return (a + b);
}

console.log(calc(2, 5));
console.log(calc(5, 33));

function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let calc = (a, b) => {a + b};

let twelve = "12.2px";
//console.log(parseInt(twelve));
console.log(parseFloat(twelve)); */

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = false; //задано свойство bool со значением false

options.colors = {
    border: "red",
    bg: "green"
};

console.log(options.colors.border);

delete options.bool; //удалить свойство bool

//цикл перебора объекта
for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length); //вывести количество keys объекта options

let soldier = {
    health: 200,
    armor: 400
};

let John = {
    health: 100
};

John.__proto__ = soldier;

console.log(John);