import { formatCurrency } from "../scripts/utils/money.js";

const testValue = 2000.5;
const test1 = formatCurrency(testValue) === "20.01" ? "passed" : "failed";

let testHTML = "";
testHTML += `<p>Heeellooo!!</p>`;
testHTML += `<p>${testValue} = ${formatCurrency(testValue)} => ${test1}</p>`;
document.querySelector(".js-money-test").innerHTML = testHTML;
