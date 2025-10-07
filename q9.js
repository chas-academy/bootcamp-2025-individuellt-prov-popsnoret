// skapa funktionerna som anropas i myCalculator så att de funkar så som koden och alla "cases" antyder

function allaNummer() {
  const num1 = parseFloat(prompt("Ange ett nummer"));
  const num2 = parseFloat(prompt("Ange ett nummer till"));
  return { num1, num2 };
}

function allaRaknesatt() {
  const operator = ["+", "-", "*", "/"];
  return operator;
}

export function myCalculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return myAddFunction(num1, num2);

    case "-":
      return mySubtractFunction(num1, num2);

    case "*":
      return myMultiplyFunction(num1, num2);

    case "/":
      return myDivisionFunction(num1, num2);

    default:
      return "Error operator not found!";
  }
}

function raknaUt {
  const {num1, num2} = allaNummer();
  const operator = allaRaknesatt();
  const result = myCalculator(operator, num1, num2);
  return result;
}

raknaUt();

// jag ger upp