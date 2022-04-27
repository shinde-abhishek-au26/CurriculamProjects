const colors = ["green","red","yellow","black","white","purple","blue","grey","orange","pink","brown","cyan"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");


btn.addEventListener('click', function () { 
//get random number between 0-3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent =colors[randomNumber];
})


function getRandomNumber() {
// Here we are multiplying the Math.random() to colors.length !! 
// because with Math.random() we will get only 0.1212121 something like that number ..... we will not get 1,2,3 or any number above 0.

// We will use Math.floor to round up the closest integer to get proper value -->> like 1,2,3...etc.
    return Math.floor(Math.random()*colors.length);
    
}