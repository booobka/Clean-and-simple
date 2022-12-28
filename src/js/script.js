// слик слайдер
$(document).ready(function(){
  $('.start__slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,

    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.svg"></img></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.svg"></img></button>',
    

    responsive: [
      {
        breakpoint: 768,
        settings: {
        dots: false,
        arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
        dots: false,
        arrows: false
        }
      },
    ]
  });



  $('.quotes__box_slider').slick({
    // centerMode: true,
    // centerPadding: '60px',
    dots: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    

    // prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.svg"></img></button>',
    // nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.svg"></img></button>',
    

    responsive: [
      {
        breakpoint: 768,
        settings: {
        dots: false,
        arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
        dots: false,
        arrows: false
        }
      },
    ]
  });
});

"use strict"


const headerLink = document.getElementsByClassName('navbar__link');
const headerActive = document.getElementsByClassName('active');

for(let i = 0; i < headerLink.length; i++) {

    headerLink[i].addEventListener('click', function(e) {
        e.preventDefault();
        let a = headerActive[0];  
        if (a) 
        a.classList.remove("active");
        if (a !== this)
        this.classList.add("active");
    });
}
//запуск анимации на стартовой стр.
const wrapper = document.querySelector('.wrapper svg');
const btnDraw = document.querySelector('.clouds__play');
const btnErase = document.querySelector('.btn-erase');

// We are only adding and removing the 'active' class,
// the entire animation is defined in the CSS code
function draw() {
    
  wrapper.classList.add('active')
  clouds__play.classList.add('btn-erase');
}

function erase() {
    
  wrapper.classList.remove('active');
  btn-erase.classList.togle('clouds__play');
}

// Add handlers to our buttons
btnDraw.addEventListener('click', draw, false);
btnErase.addEventListener('click', erase, false);

// Play draw animation once
setTimeout(draw, 300);


//акордеон


