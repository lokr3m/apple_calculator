const numbers = document.querySelectorAll(".numbers");
const signs = document.querySelectorAll(".sign");
const result = document.querySelector(".result span");
const equals = document.querySelector(".equals");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (e) => {
        let atr = e.target.getAttribute("value");
        if (!isFirstValue) {
            getFirstValue(atr);
        } else {
            getSecondValue(atr);
        }
    });
}

function getFirstValue(el) {
    if (firstValue === "0") {
        firstValue = "";
    }
    firstValue += el;
    result.innerHTML = firstValue;
}

function getSecondValue(el) {
    if (firstValue !== "" && sign !== "") {
        secondValue += el;
        result.innerHTML = secondValue;
    }
}


function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener("click", (e) => {
            sign = e.target.getAttribute("value");
            isFirstValue = true;
        });
    }
}
getSign();

equals.addEventListener("click", () => {
    result.innerHTML = "";
    firstValue = +firstValue;
    secondValue = +secondValue;

    if (sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    }

    result.innerHTML = resultValue;
});
