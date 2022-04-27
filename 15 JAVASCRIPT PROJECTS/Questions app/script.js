// METHOD 1 ----> Traversing through the DOM !
// const btns = document.querySelectorAll('.question-btn');

// // here we are looping all over the buttons 
// // for that we are getting buttons as a quereyselectorALL !
// btns.forEach(function(btn){
//     btn.addEventListener('click',(e)=>{
//         // here we are traversing the dom from child to parent !!
//         // we are selecting current elements parent element ! 
//         const question = e.currentTarget.parentElement.parentElement ;
//         question.classList.toggle('show-text');
//     })
// })



// METHOD 2 ----> Using Selectors inside the element !

// here we are selcting all the questions using 'quereyselectorAll' !
const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    // console.log(question);
    // here we are selecting buttons from the each questions ! 
    const btn = question.querySelector('.question-btn')
    // console.log(btn);

    btn.addEventListener('click',()=>{
        // selecting all the question 
        questions.forEach(function(item) {
        // if the article does not match the article where we are clicking its button to toggle the functionality , then we are removing the 'show-text' classList !
        // So the other questions will get minimized while we click on the some other question !
            if(item !== question){
                item.classList.remove('show-text');
            }
        })

        // here we are toggling with 'show-text' class to achive toggle functionality !
        question.classList.toggle('show-text'); 
    })

})