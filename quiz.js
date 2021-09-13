const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submitBtn");
const output = document.querySelector("#output");

const answers = ["90°","right angled","equilaterial triangle","one right angle"];

function calculateScore(){
    var score = 0;
    var index = 0;
    const formResults = new FormData(quizForm);
for(let value of formResults.values()){
    if(value === answers[index]){
        score = score + 1;
    }
    index = index + 1;  
}
if(score > 0){
output.innerText = "You Scored " + score + " 😇";
}
else{
    output.innerText = "You Scored " + score + " 🙁";
}
}

submit.addEventListener("click",calculateScore);