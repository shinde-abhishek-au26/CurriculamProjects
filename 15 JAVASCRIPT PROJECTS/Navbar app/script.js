// THESE ARE THE BASIC COMMANDS USED IN THIS PROJECT --->
// 1) classList = shows/gets all classes.
// 2) contains = check classList for specific class .
// 3) add = add class.
// 4) remove = remove class.
// 5) toggle = toggle class.


// We are using querey selector because we already have '.nav-toggle' class defined in index.html !
// We can use it for selecting "id", "HTML-elements","HTML-tags","Classes" etc .
const navToggle= document.querySelector('.nav-toggle');
const links= document.querySelector('.links');


// Adding addeventListener function to achieve the toggling operation !
navToggle.addEventListener('click', function() {

    // First we will check if the 'show-links' class is there or not, if it is there then we will remove that class or if not then we will add that class !
    // Conclusion - basically, to achieve the toggling function we need to simply add or remove the class while we are clicking toggle button... And it will done by javascript dom manipulation itself.

    // 1st Logic with if-else condtion -->
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links')
    // }else{
    //     links.classList.add('show-links')
    // }


    // 2nd Logic with using 'toggle()' -->
    // Instead of writing if-else condition we can write it in 1 liner also -->
    links.classList.toggle('show-links');
    
})

