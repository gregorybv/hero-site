let inp = document.querySelector("#tel");

inp.addEventListener("focus", (_) => {
  if (!/^\+\d*$/.test(inp.value)) inp.value = "+";
});

inp.addEventListener("keypress", (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});




//menu

const navButton = document.querySelectorAll('.header__push')
const displayAdd = document.querySelector('.head__nav')
const displayLink = document.querySelectorAll('.head__link')

navButton.forEach(button => {
  button.addEventListener('click', () => {
    displayAdd.classList.toggle('head__nav_active')
  })
})

displayLink.forEach(buttons => {
  buttons.addEventListener('click', () => {
    displayAdd.classList.remove('head__nav_active')
  })
})
