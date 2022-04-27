const daysEl  = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

// So first ,we are setting the newYears date !
const newYears = '1 Jan 2023'

function countdown() {

    // then we are setting newYears date into a variable !
    const newYearsDate = new Date(newYears);

    // we are setting current date !
    const currentDate = new Date();

    // here we are counting that, how many totalseconds are remaining  from the newYearsDate to currentDate !
    const totalseconds = (newYearsDate - currentDate) /1000;

    // here we are calculating the remaining days,hours,mins,sec of the newYears eve !
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const mins = Math.floor(totalseconds/60) % 60 ;
    const sec = Math.floor(totalseconds % 60);


    // Then simply we are changing the innerHTML of those element to apply the values !
    daysEl.innerHTML = formatTime(days); 
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(sec);
    console.log(days,hours,mins,sec);

}
// initial call
countdown();
setInterval(countdown,1000);


// Here we are adding 0 if the time is less than 10
// so bascially we are going with actual time format -> 12(hours)04(mins)(03)sec ->format
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time ; 
}

