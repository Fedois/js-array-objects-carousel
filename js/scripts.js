
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const boxSlidesOne = document.querySelector('.slides-one');

for(let i = 0; i < images.length; i++){

    console.log(images[i].image)
    boxSlidesOne.innerHTML += `<div class="slide">
                            <img src="${images[i].image}">
                         </div>`;
}

currentSlide = 0
const slideOne = document.querySelectorAll('.slide')
slideOne[currentSlide].style.display = 'block'

const next = document.querySelector('.next');
const back = document.querySelector('.back');

next.addEventListener('click',
    function() {
        
        slideOne[currentSlide].style.display = 'none';
        currentSlide++ 
        slideOne[currentSlide].style.display = 'block';
        

        back.style.display = 'block'

       
        
}
)

back.addEventListener('click',
    function() {
        
        slideOne[currentSlide].style.display = 'none';
        currentSlide-- 
        slideOne[currentSlide].style.display = 'block';
        

        next.style.display = 'block'

        
        
}
)

