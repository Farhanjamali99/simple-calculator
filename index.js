#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select operator",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Percentage",
            "Square",
            "Modulus",
            "calculate BMI",
        ],
    },
]);
// conditional statement:
if (answer.operator === "Addition") {
    console.log(`Your value is ${answer.firstNumber + answer.secondNumber}`);
}
if (answer.operator === "Subtraction") {
    console.log(`Your value is ${answer.firstNumber - answer.secondNumber}`);
}
if (answer.operator === "Multiplication") {
    console.log(`Your value is ${answer.firstNumber * answer.secondNumber}`);
}
if (answer.operator === "Division") {
    console.log(`Your value is ${answer.firstNumber / answer.secondNumber}`);
}
if (answer.operator === "Percentage") {
    console.log(`Your value is ${(answer.firstNumber / answer.secondNumber) * 100}`);
}
if (answer.operator === "Square") {
    console.log(`Your value is ${answer.firstNumber ** answer.secondNumber}`);
}
if (answer.operator === "Modulus") {
    console.log(`Your value is ${answer.firstNumber % answer.secondNumber}`);
}
if (answer.operator === "calculate BMI") {
    console.log(`Your value is ${answer.firstNumber / (answer.secondNumber * answer.secondNumber)}`);
}
else {
    console.log("Please select one of operator");
}
