function add() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var sum = Number(num1) + Number(num2);
        window.alert(sum);
}

function subtract() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var diff= num1 - num2;
        window.alert(diff);
}
function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var product = num1 * num2;
        window.alert(product);
}
function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var quotient = num1 / num2;
        window.alert(quotient);
}
function modulus() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var remainder = num1 % num2;
        window.alert(remainder);
}
function exponent() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var power = Math.pow(num1, num2);
        window.alert(power);
} 