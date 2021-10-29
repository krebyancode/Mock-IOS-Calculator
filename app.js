let processLine = document.querySelector("#first-line")
let resultLine = document.querySelector("#result-line")
let buttonNumbers = document.querySelectorAll(".all.numbers")
let buttonOperands = document.querySelectorAll(".all.operands")
let buttonEquals = document.querySelector(".all.equals")
let buttonCancel = document.getElementById("cancel").children[0]
let buttonPosNeg = document.getElementById("pos-neg").children[0]
let buttonPercent = document.getElementById("percent").children[0]
let firstNumber = ""
let secondNumber = ""
let operator = ""

function fourOperations() {

    buttonOperands.forEach(function(operand) {
        operand.addEventListener("click", (e) => {
            if (resultLine.innerHTML == "") {
                firstNumber = processLine.innerHTML
                console.log(firstNumber);
                operator = operand.innerHTML
                console.log(operator);
                processLine.innerHTML += operator
            } else {
                processLine.innerHTML = ""
            }
        })
    })

    buttonNumbers.forEach(function(number) {
        number.addEventListener("click", (e) => {
            if (resultLine.innerHTML == "") {
                if (firstNumber == "") {
                    processLine.innerHTML += number.innerHTML
                } else {
                    processLine.innerHTML += number.innerHTML
                    secondNumber += number.innerHTML
                }
            } else {
                processLine.innerHTML = ""
            }
        })
    })

    buttonEquals.addEventListener("click", (e) => {
        if (firstNumber.includes(',') || secondNumber.includes(',')) {
            firstNumber = firstNumber.replace(',','.')
            secondNumber = secondNumber.replace(',','.')
        }
        let result = 0
        switch(operator) {
            case "+":
                result = parseFloat(firstNumber) + parseFloat(secondNumber)
                break;
            case "-":
                result = parseFloat(firstNumber) - parseFloat(secondNumber)
                break;
            case "x":
                result = parseFloat(firstNumber) * parseFloat(secondNumber)
                break;
            case "÷":
                result = parseFloat(firstNumber) / parseFloat(secondNumber)
                break;
            default:
                result = `:(`
            
        }
        result = Math.round(result*Math.pow(10,9))/Math.pow(10,9)
        resultLine.innerHTML = `${result}` 
    })

    buttonCancel.addEventListener("click", (e) => {
        resultLine.innerText = ""
        processLine.innerText = ""
        firstNumber = ""
        secondNumber = ""
        operator = ""
    })

    buttonPosNeg.addEventListener("click", (e) => {
        if(parseFloat(processLine.innerText)>0) {
            processLine.innerText = "-" + processLine.innerText
        } else if (parseFloat(processLine.innerText)<0) {
            processLine.innerText = processLine.innerText.replace('-','')
        } else {
            processLine.innerText
        }
    })

    buttonPercent.addEventListener("click", (e) => {
        if(parseFloat(processLine.innerText)) {
            processLine.innerText = Math.round(parseFloat(processLine.innerText)/100*Math.pow(10,9))/Math.pow(10,9)
        } else {
            processLine.innerText
        }
    })
}

fourOperations();