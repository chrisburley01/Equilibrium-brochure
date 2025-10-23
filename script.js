const nav = document.getElementById('nav');
const burger = document.getElementById('hamburger');
const year = document.getElementById('year');

if (burger) {
  burger.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', String(!open));
  });
}

if (year) year.textContent = new Date().getFullYear();

// Smooth anchor scroll
for (const a of document.querySelectorAll('a[href^="#"]')){
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      if (window.innerWidth < 860) nav.style.display = 'none';
    }
  });
}

// Simple form handler
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
if (form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    // Replace with real endpoint or Netlify/Jamstack form handling
    console.log('Form submission', data);
    msg.textContent = 'Thanks — we’ll be in touch within one business day.';
    form.reset();
  });
}