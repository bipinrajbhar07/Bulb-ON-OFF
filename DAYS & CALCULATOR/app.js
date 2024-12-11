function calculator() {
    let num1 = parseFloat(prompt("Enter a First number :"));
    let operator = prompt("Enter the operator +,-,*,/ : ");
    let num2 = parseFloat(prompt("Enter a Second number :"));
    let Result;

    switch (operator) {
        case '+':
            Result = num1 + num2;
            break;
        case '-':
            Result = num1 - num2;
            break;
        case '*':
            Result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                Result = num1 / num2;
            } else {
                Result = 'Error: Division by zero';
            }
            break;
        default:
            Result = 'Error: Invalid operator';
    }

    alert (`Result:${Result}`);
}


calculator(); 
