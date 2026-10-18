// Mobile menu toggle
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form: basic validation (no backend yet; swap in Formspree or similar later)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    if (!form.checkValidity()) {
      msg.textContent = 'Please fill in your name, a valid email and a message.';
      return;
    }
    msg.textContent = 'Thank you! (Form is not connected yet. See README.)';
    form.reset();
  });
}
