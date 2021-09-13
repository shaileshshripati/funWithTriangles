const inputHeight = document.querySelector("#input-height");
const inputBase = document.querySelector("#input-base");
const calBtn = document.querySelector(".cal-btn");
const output = document.querySelector(".output");

function area(a,b){
    var multipleValue = a*b;
    var areaValue = 0.5 * multipleValue;
    return areaValue
}

function clickHandler(){
    const areaOfTriangle = area(Number(inputHeight.value),Number(inputBase.value));
    if(innerHeight.value && inputBase.value)
    {
    output.innerText = "The area of triangle is " + areaOfTriangle + " sq cm"
    }
    else
    {
    output.innerText = "Input can't be blank !!"
    }
}

calBtn.addEventListener("click",clickHandler);