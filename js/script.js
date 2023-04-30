'use strict';
let getArea = (number) => {
    if (isNaN(number)) return console.log("Повинно бути числове значення.")
    else if (number == "" || number == " ") return console.log("Будь ласка, введіть радіус!")
    else return console.log("Площа кола=" + Math.PI * (number * number) + " кв.од.");
}
let getSqrt = (number) => {
    if (isNaN(number)) return console.log("Повинно бути числове значення.")
    else if (number == "" || number == " ") return console.log("Будь ласка, введіть число!")
    else if (number < 0) return console.log("Введіть додатнє число.")
    else return console.log("Квадратний корінь з " + number + " дорівнює " + Math.sqrt(number));
}
let MyMath = {
    PI: 3.141592,
    pow: function (number, degree) {
        if (isNaN(number) || isNaN(degree)) return "Повинно бути числове значення."
        else if (number == "" || number == " " || degree == "" || degree == " ") return "Будь ласка, введіть числа";
        let i=1;
        let result = 1;
        let neg = false;
        if (degree < 0) { degree *= -1; neg = true; }
        while (i <= degree) {
            result *= number;
            i++;
        }
        if ((degree > 0) & (neg)) result = 1 / result
        else if ((degree == 0) | (degree > 0)) result = result
        return result;
    },
    abs: function (number) {
        if (isNaN(number)) return "Повинно бути числове значення."
        else if (number == "" || number == " ") return "Будь ласка, введіть число";
        if (number < 0) return number * -1
        else return number;
    },
    max: function (...arg) {
        for (let k=0;k<arg.length;k++) 
        if (isNaN(arg[k])) return "Повинні бути числові значення."
        else if (arg[k] == "" || arg[k] == " ") return "Будь ласка, введіть числа";

        let bigger = arg[0];
        for (let i = 1; i < arg.length; i++)
            if (arg[i] > bigger) bigger = arg[i];
        return bigger;
    },
    min: function (...arg) {
        for (let k=0;k<arg.length;k++) 
        if (isNaN(arg[k])) return "Повинні бути числові значення."
        else if (arg[k] == "" || arg[k] == " ") return "Будь ласка, введіть числа";
        let less = arg[0];
        for (let i = 1; i < arg.length; i++)
            if (arg[i] < less) less = arg[i];
        return less;
    },
}
/*------------------1----------------------------------- */
getArea(prompt("Введіть радіус"));
/*------------------2----------------------------------- */
getSqrt(prompt("Введіть число для обчислення корня квадратного"));
/*-------------------3-------------------------------- */
console.log('Число PI:');
console.log(MyMath.PI);
console.log('Степінь:');
console.log(MyMath.pow(5, 2));
console.log('Число модуль:');
console.log(MyMath.abs(-1));
console.log('Число max:');
console.log(MyMath.max(1, 2, 3));
console.log('Число min:');
console.log(MyMath.min(1, 2, 3));