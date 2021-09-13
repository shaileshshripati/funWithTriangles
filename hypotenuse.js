const inputHeight = document.querySelector("#input-height");
const inputBase = document.querySelector("#input-base");
const calBtn = document.querySelector(".cal-btn");
const output = document.querySelector(".output");

function sumOfSquareOfBaseAndHeight(a,b){
    var heightSquare = a*a;
    var baseSquare = b*b;
    var sumValue = heightSquare + baseSquare;
    return sumValue
}

function clickHandler(){
    const sumOfValues = sumOfSquareOfBaseAndHeight(Number(inputHeight.value),Number(inputBase.value));
    var hypotenuse = Math.sqrt(sumOfValues);
    if (inputHeight.value && inputBase.value)
    {
    output.innerText = "The length of hypotenuse is " + hypotenuse + " sq cm"
    }
    else
    {
    output.innerText = "Please fill the fields"
    }
}

calBtn.addEventListener("click",clickHandler);