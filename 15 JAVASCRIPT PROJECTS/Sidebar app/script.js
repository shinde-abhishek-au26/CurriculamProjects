// Here we need 3 elements from our html page to get this sidebar functionality done !

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');


// Here we are adding an eventlistener to the toggleBtn and toggling with the 'show-sidebar' class which we have mentioned in the CSS
// It will give us the toggleing functioning !
toggleBtn.addEventListener('click',()=>{

    // 1 liner code using 'toggle()' function !
    sidebar.classList.toggle('show-sidebar');
})

// Then here we are removing the 'show-sidebar' class using an eventlistner for default value !
closeBtn.addEventListener('click', ()=>{

    // Removing the 'show-sidebar' class !
    sidebar.classList.remove('show-sidebar');
})