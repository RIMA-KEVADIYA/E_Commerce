const track = document.getElementById("product-grid");
const slides = document.querySelectorAll(".custome");
const arrowLeft = document.getElementById("left");
const arrowRight = document.getElementById("right");

let currentIndex = 0;
const visibleSlides = 3; // how many slides to show
const slideWidth = slides[0].offsetWidth + 20; // +gap

function updateSliderPosition() {
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

arrowRight.addEventListener("click", () => {
  if (currentIndex < slides.length - visibleSlides) {
    currentIndex++;
    updateSliderPosition();
  }
});

arrowLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

updateSliderPosition();
