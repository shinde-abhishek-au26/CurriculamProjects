let btn = document.querySelector('.container1 button');
let jokeDiv = document.querySelector('.container1 .joke p')

document.addEventListener("DOMContentLoaded",getjock);

btn.addEventListener('click',getjock);

async function getjock() {

    // fetching url with await keyword and adding headers in the form of application/json.
    jokeData = await fetch("https://icanhazdadjoke.com/",{
        headers :{
            Accept :"application/json"
        }
    });

    // storing jokedata of json format into another variable.
    const jokeObj = await jokeData.json();

    // changing innerHTML of the jokeDiv into original joke !
    jokeDiv.innerHTML = jokeObj.joke;
    console.log(jokeData);

    
}