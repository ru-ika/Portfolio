const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const messageForm = document.getElementById('messageForm');
const messagePopup = document.getElementById('messagePopup');
const certificateModal = document.getElementById('certificateModal');
const certificateClose = document.getElementById('certificateClose');
const certificateImage = document.getElementById('certificateImage');
const certificateTitle = document.getElementById('certificateTitle');
const certificateError = document.getElementById('certificateError');

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

function closeCertificate() {
  certificateModal.hidden = true;
  document.body.style.overflow = '';
  certificateImage.removeAttribute('src');
}

document.querySelectorAll('.cert-name, .exp-certificate-trigger').forEach(certName => {
  certName.addEventListener('click', () => {
    certificateTitle.textContent = certName.dataset.title;
    certificateImage.alt = certName.dataset.title;
    certificateImage.src = certName.dataset.image;
    certificateError.hidden = true;
    certificateModal.hidden = false;
    document.body.style.overflow = 'hidden';
  });

  certName.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      certName.click();
    }
  });
});

certificateImage.addEventListener('error', () => {
  certificateImage.hidden = true;
  certificateError.hidden = false;
});

certificateImage.addEventListener('load', () => {
  certificateImage.hidden = false;
  certificateError.hidden = true;
});

certificateClose.addEventListener('click', closeCertificate);

certificateModal.addEventListener('click', event => {
  if (event.target === certificateModal) closeCertificate();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !certificateModal.hidden) closeCertificate();
});
