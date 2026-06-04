let slideIndex = 1;
let tuchStartX = 0;
let tuchEndX = 0;

const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot"); 
const keyCode = {arrowLeft: 37, arrowRight: 39};
const pxlSwipeRange = 100;
const slider = document.querySelector(".slideshow-container");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");


function setupDots() {
    dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        currentSlide(index + 1);
        });
    })
}

    nextButton.addEventListener("click", function(){
        plusSlides(1);
    })

    prevButton.addEventListener("click", function(){
        plusSlides(-1);
    })
    


document.addEventListener("keydown", function(event) {
    if(event.keyCode === keyCode.arrowLeft) { 
        plusSlides(-1);
    }
    if(event.keyCode === keyCode.arrowRight) { 
        plusSlides(1);
    }
})

slider.addEventListener("touchstart", function(event) {

    touchStartX = event.changedTouches[0].screenX;
});

slider.addEventListener("touchend", function(event) {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();
});

function handleSwipe() {

    if (touchStartX > touchEndX + pxlSwipeRange) {
        plusSlides(1);
    }

    if (touchStartX < touchEndX - pxlSwipeRange) {
        plusSlides(-1);
    }
}

const sliderInterval = setInterval(function () {
    plusSlides(1);
}, 2000); // якщо робити без clearInterval то можна тут const не задавати, але так як нам треба потім вказати що зупиняти, створюємо sliderInterval

// clearInterval(sliderInterval); це якщо ми хочемо зупинити setInterval

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

    procesSlides();
    procesDots();
}

function procesSlides() {
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides[slideIndex-1].style.display = "block";
}

function procesDots() {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[slideIndex-1].classList.add("active");
}

showSlides(slideIndex);
setupDots();

