var operator = prompt("Enter anyone operation +,-,*,/,%:");
var num1 = Number(prompt("Enter First number:"));
var num2 = Number(prompt("Enter Second Number: "));
var result;
if (operator === "+"){
    result = num1 + num2;
    document.write("Result is: "+ result);
}
else if(operator === "-"){
    result = num1 - num2;
    document.write("Result is: "+ result);
}
else if (operator === "*"){
    result = num1 * num2;
    document.write("Result is: "+ result);
}
else if (operator === "/"){
    result = num1 / num2;
    document.write("Result is: "+ result);
}
else if (operator === "%"){
    result = num1 % num2;
    document.write("Result is: "+ result);
}