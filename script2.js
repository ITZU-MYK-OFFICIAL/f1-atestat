// Variabile pentru starea curentă
let currentIndex = 0;

// Selectăm toate imaginile din carusel
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

// Funcția pentru slide-ul următor
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Funcția pentru slide-ul anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

// Actualizează poziția caruselului
function updateCarousel() {
  const offset = -currentIndex * 100; // Calculăm offset-ul în funcție de slide-ul curent
  slides.style.transform = `translateX(${offset}%)`;
}

// Pornire automată a caruselului
setInterval(nextSlide, 3000);