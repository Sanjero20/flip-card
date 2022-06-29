const cards =  document.querySelectorAll('.card');
const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');

btnClose.addEventListener('click', () => {
  cards.forEach((card) => {
    card.classList.remove('flip')
  })
})

btnOpen.addEventListener('click', () => {
  cards.forEach((card) => {
    card.classList.add('flip')
  })
})

cards.forEach((card) => {
  card.addEventListener('click', () => flipCard(card))
})

function flipCard(card) {
  card.classList.toggle('flip')
}