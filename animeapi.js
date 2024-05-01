
const url4 = "https://animechan.xyz/api/random";
const btn4 = document.getElementById('btn4');
const quote1 = document.getElementById('q1');
const author = document.getElementById('auth');

const getAnimechan = async () => {

    let response = await fetch(url4);
    console.log(response);
    let chan =  await response.json();
    console.log(chan);
    quote1.innerText = chan.quote;
    author.innerText = chan.character;

}

btn4.addEventListener('click',getAnimechan);