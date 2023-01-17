
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

for(let i = 0; i < images.length; i++){

    const boxSlidesOne = document.querySelector('.box-slides-one');
    const boxSlidesTwo = document.querySelector('.box-slides-two');

    boxSlidesOne.innerHTML += `<div class="slide-one">
                                <img src="${images[i].image}">
                                <div class="info">
                                    <h1 class="title">${images[i].title}</h1>
                                    <p class="text">${images[i].text}</p>
                                </div>
                                </div>`;
    
    boxSlidesTwo.innerHTML += `<div class="slide-two">
                                <img src="${images[i].image}">
                            </div>`;
}

currentSlide = 0
const slideOne = document.querySelectorAll('.slide-one')
const slideTwo = document.querySelectorAll ('.slide-two')
const thumb = document.querySelectorAll('.line')

slideOne[currentSlide].classList.add('display');
slideTwo[currentSlide].classList.add('current')
thumb[currentSlide].classList.add('white')


const next = document.querySelector('.next');
const back = document.querySelector('.back');

next.addEventListener('click',
    function() {
        
        slideOne[currentSlide].classList.remove('display');
        slideTwo[currentSlide].classList.remove('current');
        thumb[currentSlide].classList.remove('white')
        
        if(currentSlide == images.length - 1){
            currentSlide = 0
            slideOne[currentSlide].classList.add('display');
            slideTwo[currentSlide].classList.add('current');
            thumb[currentSlide].classList.add('white')
        }
        else{
            currentSlide++
            slideOne[currentSlide].classList.add ('display');
            slideTwo[currentSlide].classList.add ('current');
            thumb[currentSlide].classList.add('white')

        }

}
)

back.addEventListener('click',
    function() {
        
        slideOne[currentSlide].classList.remove('display');
        slideTwo[currentSlide].classList.remove('current');
        thumb[currentSlide].classList.remove('white')
        
        if(currentSlide == 0){
            currentSlide = images.length - 1
            slideOne[currentSlide].classList.add('display');
            slideTwo[currentSlide].classList.add('current');
            thumb[currentSlide].classList.add('white')


        }
        
        else{
            currentSlide--
            slideOne[currentSlide].classList.add ('display');
            slideTwo[currentSlide].classList.add ('current');
            thumb[currentSlide].classList.add('white')
        }

}
)

const clock = setInterval(() => {
        slideOne[currentSlide].classList.remove('display');
        slideTwo[currentSlide].classList.remove('current');
        thumb[currentSlide].classList.remove('white')
        
        if(currentSlide == images.length - 1){
            currentSlide = 0
            slideOne[currentSlide].classList.add('display');
            slideTwo[currentSlide].classList.add('current');
            thumb[currentSlide].classList.add('white')
        }
        else{
            currentSlide++
            slideOne[currentSlide].classList.add ('display');
            slideTwo[currentSlide].classList.add ('current');
            thumb[currentSlide].classList.add('white')

        }
}, 1000);
