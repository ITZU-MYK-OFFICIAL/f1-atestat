// Variabile pentru starea curentă
let currentIndex = 0;

// Selectăm toate imaginile din carusel
 // Slide automat la fiecare 3 secunde


document.getElementById('teams').addEventListener('change', function () {
  const selectedTeam = this.value;
  document.querySelectorAll('.team').forEach(team => team.classList.remove('selected')); // Eliminăm evidențierile anterioare
  if (selectedTeam !== 'default') {
    const targetElement = document.getElementById(selectedTeam);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      targetElement.classList.add('selected'); // Adăugăm clasa pentru evidențiere
    }
  }
});


// Referință la buton
const backToTopButton = document.getElementById('back-to-top');

// Ascultăm evenimentul de scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) { // Afișăm butonul dacă utilizatorul derulează mai jos de 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Eveniment pentru clic pe buton
backToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Scroll lin până sus
  });
});
