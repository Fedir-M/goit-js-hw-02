// Доповни код функції так, щоб вона повертала число —загальну ширину елемента.
// При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

// Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

function getElementWidth(content, padding, border){
//  const a = parseFloat(content); //
//  const b = parseFloat(padding); //
//  const c = parseFloat(border); //

 return  parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
}
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
