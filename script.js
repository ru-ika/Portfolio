const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const messageForm = document.getElementById('messageForm');
const messagePopup = document.getElementById('messagePopup');

menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

messageForm.addEventListener('submit', event => {
  event.preventDefault();
  messageForm.reset();
  messagePopup.classList.add('show');

  window.setTimeout(() => {
    messagePopup.classList.remove('show');
  }, 3000);
});