const angleOne = document.querySelector("#angle-1");
const angleTwo = document.querySelector("#angle-2");
const angleThree = document.querySelector("#angle-3");
const checkBtn = document.querySelector("#check");
const output = document.querySelector(".output");


function clickHandler(){
    var sum = Number(angleOne.value)+Number(angleTwo.value)+Number(angleThree.value);
    if (angleOne.value && angleTwo.value && angleThree.value){
    if(sum==180){
        output.innerText = "Yes, The angles form a triangle 😇";
    }
    else{
        output.innerText = "Nope, The given angles don't form a triangle 🙁";
    }
}
    else{
        output.innerText = "Please Enter the values!!";
    }
}

checkBtn.addEventListener("click",clickHandler);