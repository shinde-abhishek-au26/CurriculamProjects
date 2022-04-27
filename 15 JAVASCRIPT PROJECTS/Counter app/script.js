// setting initial counter ->
let count = 0;

// Selecting value and buttons
const value = document.querySelector('#value');
const btns =document.querySelectorAll('.btn');

// console.log(btns);

// here we are selecting all the btns and looping over them
btns.forEach(function(btn){
    // console.log(item);
    btn.addEventListener('click',function (e) {
        // selecting the current target btn and its classlist
        const styles = e.currentTarget.classList;
        // then we match our both the classlists.. styles classlist and the actual classlist we declared in html.
        if(styles.contains('decrease')){
            count--
        }else if (styles.contains('increase')){
            count++
        }else{
            count = 0
        }
        // Now we are changing color of a count depending on increasing or decreasing val.
        if(count > 0){
            value.style.color = 'green'
        }
        else if(count < 0){
            value.style.color = 'red'
        }
        else if(count == 0){
            value.style.color = 'black'
        }
        // after this 3 operations we change the textContent value to count
        value.textContent = count;  
    })
})
