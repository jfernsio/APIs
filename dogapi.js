
const url3 = "https://random.dog/woof.json";
const btn3 = document.getElementById('btn3');
const dogimg = document.getElementById('img2'); 

const getDog = async () => {
    let resposnse = await  fetch(url3)
    console.log(resposnse);
    let doggpic =  await resposnse.json()
    let woof = doggpic.url;
    dogimg.src = woof;
    dogimg.style.display="body";

} 

btn3.addEventListener('click',getDog);