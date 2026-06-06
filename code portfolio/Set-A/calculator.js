function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

function power(num1, num2) {
    return Math.pow(num1, num2);
}

function squareRoot(num) {
    if (num < 0) {
        throw new Error("Cannot take square root of a negative number");
    }
    return Math.sqrt(num);
}

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

