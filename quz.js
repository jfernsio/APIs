
// const url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
 const url ="https://opentdb.com/api.php?amount=10"
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');
 const txt3 = document.getElementById('txt3');

const getQuiz = async() => {
let response = await fetch(url);
console.log('Getting datta...');
let some = await response.json();
let neh = some.results;
let o = neh[1];
txt1.innerText = o.question;
console.log(o);
txt2.textContent = o.correct_answer;

let skssks = o.incorrect_answers;
for( let sks of skssks) {
    txt3.innerText = skssks[sks];
}

}
   
