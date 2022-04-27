// Here we can add unlimited number of  person's data in the "reviews" array !
// or we can fetch the data using the API !
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Weed Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Lorem ipsum dolor sit amet sdasdasdasasdas sdadwewe sdsa asdsad qwewqeadasdasdasdas sdsdwewecxsds sdssdsds"
    },

    {
        id: 1,
        name: "Nancy White",
        job: "Dancer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque sapiente accusamus necessitatibus error laborum, tempora impedit deleniti, illo sunt accusantium vero in quam labore eaque obcaecati soluta rem commodi.si ep"


    },

    {
        id: 1,
        name: "Annu Malik",
        job: "Singer",
        img: "https://static.indiatvnews.com/ins-web/images/anu-malik-profile-1548926540.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque sapiente accusamus necessitatibus error laborum, tempora impedit deleniti, illo sunt accusantium vero in quam labore eaque obcaecati soluta rem commodi.si ep"


    },

    {
        id: 1,
        name: "Selmon bhai",
        job: "Actor/Heavy Driver",
        img: "https://www.iwmbuzz.com/wp-content/uploads/2019/07/salman-khans-funny-take-on-the-edameme-vegetable.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque sapiente accusamus necessitatibus error laborum, tempora impedit deleniti, illo sunt accusantium vero in quam labore eaque obcaecati soluta rem commodi.si ep"


    }]

// Selecting items using document.getElementbyId !
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')


const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item !
let currentItem = 0;


// load initial item !
window.addEventListener('DOMContentLoaded',function() {
    showPerson(currentItem);
  
})


// show person based on item !
function showPerson() {
    // we are setting item variable as 0 , so it will always start from 0th index.
    const item  = reviews[currentItem];

    // here we are setting the properties to our array items.
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// show next person on click !
nextBtn.addEventListener('click',function() {
    currentItem++ ;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    };
    showPerson();
})


// show previous person click
prevBtn.addEventListener('click',function() {
    currentItem-- ;
    if(currentItem < 0){
        currentItem = reviews.length-1
    };
    showPerson();
})

// show random person !
randomBtn.addEventListener('click',function() {
    // here we are setting math.floor function to currentItem variable to generate random number !
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson();
})









