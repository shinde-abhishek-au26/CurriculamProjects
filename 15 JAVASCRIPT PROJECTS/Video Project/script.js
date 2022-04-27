const btn  = document.querySelector('.switch-btn')
const video  = document.querySelector('.video-container')

btn.addEventListener('click', ()=>{
    console.log("hello");
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause();
    }
    else{
        btn.classList.remove('slide')
        video.play();
    }
})