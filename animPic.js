const getVal = document.getElementById('opt');
const selsect = document.getElementById('select').value;
const btn5 = document.getElementById('btn5');
const img5 = document.getElementById('img5');


const getAnimePic = async () => {
let valll = getVal.value;

    if(valll === selsect) {
        throw console.error('not a option');
        img5.innerText = "not an option";
    }
    if(valll !== selsect) {


    const url5 = `https://nekos.best/api/v2/${valll}`;

     let response = await  fetch(url5);
     console.log(response);
     let dadadada = await response.json();
     console.log(dadadada.results[0].url);
    //  img5.src =  dadadada.results;
    let park =(dadadada.results[0].url);
    img5.src = park;
    img5.style.display="block";
  
}
}

btn5.addEventListener('click',getAnimePic);