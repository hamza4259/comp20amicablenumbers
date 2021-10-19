function amicableNumbers() {
    //get input from user
    let firstNumber = parseInt(document.querySelector('#firstNumber').value);
    let secondNumber = parseInt(document.querySelector('#secondNumber').value);

    //get factors from first and second numbers
    let num1_factors = getFactors(firstNumber);
    let num2_factors = getFactors(secondNumber);
    

    // Sum of Factors
    let sum1 = sumFactors(num1_factors);
    let sum2 = sumFactors(num2_factors);

    // Display Results
    let result = document.querySelector("#results");
    if (sum1 == secondNumber && sum2 == firstNumber) {
        result.innerHTML = `<div>The numbers: ${firstNumber} and ${secondNumber} are amicable</div>`;
    } else {
        result.innerHTML = `<div>The numbers: ${firstNumber} and ${secondNumber} are not amicable</div>`;
    }

    let factorDisplay = document.querySelector("#factors");
    factorDisplay.innerHTML = `<p>${firstNumber}: factors = [${num1_factors}], 
                                sum = ${sum1}</p> 
                                <br> 
                                <p>${secondNumber}: factors = [${num2_factors}], 
                                sum = ${sum2}</p>`;
}

// get factors and push to an array
function getFactors(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (isAFactor(num, i)) {
            arr.push(i);
        }
    }
    return arr;
}

// Returns true if num is a factor
function isAFactor(num, fact) {
    return (num % fact == 0);
}

// returns the sum of elements
function sumFactors(factArr) {
    let sum = 0;
    for (let i = 0; i < factArr.length; i++) {
        sum += factArr[i];
    }
    return sum;
}
