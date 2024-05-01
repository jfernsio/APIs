
const imageEL = document.getElementById('img');
const button = document.getElementById('bt-n');
const imgUrl = "https://animechan.xyz/api/random";
const para = document.getElementById('p');

const someImage = async () => {

    try {
  const response = await fetch(imgUrl);
  console.log(response);

  let data = await response.json();
console.log(data);
para.innerText = data.quote;
    }
// imageEL.src = data.url;

catch (error) {
console.log('ERRORR', error);
}

}

button.addEventListener('click',someImage)