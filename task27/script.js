let slideIndex = 1;
const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot"); 

function setupDots() {
    dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        currentSlide(index + 1);
        });
    })
}
const nextButton = document.querySelector(".next");
    nextButton.addEventListener("click", function(){
        plusSlides(1);
    })
const prevButton = document.querySelector(".prev")
    prevButton.addEventListener("click", function(){
        plusSlides(-1);
    })
    
showSlides(slideIndex);
setupDots();

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 37) { // але можна ще використати (event.key === "ArrowLeft")
        plusSlides(-1);
    }
    if(event.keyCode === 39) { // (event.key === "ArrowRight")
        plusSlides(1);
    }
})

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

