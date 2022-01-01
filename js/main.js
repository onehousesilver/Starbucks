// document == HTML 자체로 이해해도 무방함

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
  searchInputEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchInputEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});