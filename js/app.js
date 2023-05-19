const burger = document.querySelector('.menu__burger')
const menu = document.querySelector('.mobile-nav')
const body = document.body

burger.addEventListener('click', function() {
    burger.classList.toggle('close')
    menu.classList.toggle('active')
    body.classList.toggle('noscroll')
  })