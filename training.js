function calc (a, b) {
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
console.log(parseFloat(twelve));