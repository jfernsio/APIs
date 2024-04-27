const but = document.getElementById('btn2');
const button = document.getElementById('btn');
const text = document.getElementById('text');
const text1 = document.getElementById('text2');
const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');

const url = "https://official-joke-api.appspot.com/random_joke";
const url2 = "https://opentdb.com/api.php?amount=10"
const urlD = "https://random.dog/woof.json";
const anime ="https://api.waifu.pics/type/category";

// var some  = {
//     method:'GET'
// };
// const getJokes = async () => {

//     let response =  await fetch(url,some);
//     console.log('Getting data...');
// console.log(response);

// let joke = await response.json();
// console.log(joke);
// text.innerText = joke.setup;
// text2.innerText = joke.punchline;

// }

// const getQuiz = async () => {

//     let response =  await fetch(url2);
//     console.log('Getting data...');
// console.log(response);

// let joke = await response.json();
// console.log(joke);
// je = joke.results;
// txt1.textContent = je(1);
// // txt2.innerText = joke.punchline;

// }


const randomDog = async () => {
    let response = await fetch(anime);
console.log(response);
    let dogPic = await response.json();
    console.log(dogPic);
//     let Piha = dogPic.url;
//    let jsjs = source = Piha;
//    text.innerText = jsjs;
}


// but.addEventListener('click',getQuiz);
button.addEventListener('click',randomDog);
