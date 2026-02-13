const switchFirstCardButton = document.getElementById('switch-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blueHashColor = "#2200ff";

switchFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueHashColor;
});

const productCards = document.querySelectorAll('.product-card');
const switchAllCardButton = document.getElementById('switch-all-card-button');
const yellowHashColor = 'rgba(222, 233, 8)';

switchAllCardButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = yellowHashColor
  )
});

const googleOpenButton = document.getElementById('open-google-button');
googleOpenButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else { 
}};

const colorToggleSwitchButton =document.querySelector('#color-toggle-switch-button');
colorToggleSwitchButton.addEventListener('click', () => {
  colorToggleSwitchButton.classList.toggle('active');
});

const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.textContent);
});

