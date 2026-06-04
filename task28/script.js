class Slider {
    constructor(selector, options = {}) {
       this.slideIndex = 1;
       this.touchStartX = 0;
       this.touchEndX = 0;
       this.keyCode = {
            arrowLeft: 37,
            arrowRight: 39
       };
       this.pxlSwipeRange = 100;
       this.slider = document.querySelector(selector);
       this.slides = document.querySelectorAll(".mySlides");
       this.dots = document.querySelectorAll(".dot");
       this.nextButton = document.querySelector(".next");
       this.prevButton = document.querySelector(".prev");
       
       this._setupDots();
       this._setupButtons();
       this._setupKeyboard();
       this._setupTouches();
       this.setupAutoplay();


       this.showSlides(this.slideIndex);
    }

_setupDots() {
    this.dots.forEach((dot, index) => {
    dot.addEventListener("click", this.handleDotClick.bind(this, index + 1));
    })
}
    handleDotClick(slideNumber) {
        this.currentSlide(slideNumber);
    }

_setupButtons() {
    this.nextButton.addEventListener("click", this.nextSlide.bind(this));
    this.prevButton.addEventListener("click", this.prevSlide.bind(this));
}
nextSlide() {
    this.plusSlides(1);
}
prevSlide() {
    this.plusSlides(-1);
}

_setupKeyboard() {
    document.addEventListener("keydown", this.handleKeyboard.bind(this))
}
handleKeyboard(event) {
        if(event.keyCode === this.keyCode.arrowLeft) { 
            this.plusSlides(-1);
        }
        if(event.keyCode === this.keyCode.arrowRight) { 
            this.plusSlides(1);
        }
}

_setupTouches() {
    this.slider.addEventListener("touchstart", this.handleTouchStart.bind(this))
    this.slider.addEventListener("touchend", this.handleTouchEnd.bind(this))
}
handleTouchStart(event) {
    this.touchStartX =
        event.changedTouches[0].clientX;
}
handleTouchEnd(event) {
    this.touchEndX =
        event.changedTouches[0].clientX;

    this.handleSwipe();
}

handleSwipe() {

    if (this.touchStartX > this.touchEndX + this.pxlSwipeRange) {
        this.plusSlides(1);
    }

    if (this.touchStartX < this.touchEndX - this.pxlSwipeRange) {
        this.plusSlides(-1);
    }
}

setupAutoplay() {
     this.sliderInterval = setInterval(this.nextSlide.bind(this), 2000);
}

plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

showSlides(n) {
  if (n > this.slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = this.slides.length}

    this.procesSlides();
    this.procesDots();
}

procesSlides() {
    this.slides.forEach(slide => {
        slide.style.display = "none";
    });
    this.slides[this.slideIndex-1].style.display = "block";
}

procesDots() {
    this.dots.forEach(dot => {
        dot.classList.remove('active');
    });
    this.dots[this.slideIndex-1].classList.add("active");
}
}
const slider = new Slider(".slideshow-container");
