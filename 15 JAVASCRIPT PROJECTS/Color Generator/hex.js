const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025 -> hex color example
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// we are adding an event listener on button
btn.addEventListener('click', function () {
    // here we need to store '#' value in variable !
    let hexColor = '#';

    // then we are iterating over hex and adding'#'before all 5 values.
    // so it will become hex code of 6 elements ---> #f15025
    for (let i = 0; i < 6; i++) {
        // here we are adding '#'value to the array of hex and then we are calling getRandomNumber() to achieve random hex code.
        hexColor += hex[getRandomNumber()]
    }

    // now we are changing textcontent to hexcolor
    color.textContent = hexColor;

    // here we are chaning body background color to hexcolor
    document.body.style.backgroundColor = hexColor;
})


// We need a function which will get a random number from array of hex
// so we are writing a getrandomNumber function to achieve that functionality using Math.floor()
function getRandomNumber() {

    return Math.floor(Math.random() * hex.length)

}