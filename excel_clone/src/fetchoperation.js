console.log("frontend")
const tablerows = document.getElementsByTagName("tr")
console.log(tablerows);
let tableraay = [];
for (let index = 1; index < 27; index++) {
let rowjson = {};
const row = tablerows[index];
for (let jendex = 1; jendex < 10; jendex++) {
  const element = row[jendex];
  const cell = row.getElementsByTagName('td')[jendex];
 // console.log(cell?.innerText)
  rowjson[`${index}-${jendex}`] = cell?.innerText

}
tableraay.push(rowjson);
console.log("next line")
}

console.log(tableraay)