

const menuLinks = document.querySelectorAll('.nav-item a');


menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetText = this.textContent.trim().toLowerCase();
    let targetSection;

    if (targetText === 'home') {
      targetSection = document.querySelector('header'); 
    } else if (targetText === 'about us') {
      targetSection = document.querySelector('.about-section');
    } else if (targetText === 'services') {
      targetSection = document.querySelector('.services-section');
    } else if (targetText === 'contact') {
      targetSection = document.querySelector('.contact-section');
    }

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


const sections = document.querySelectorAll('section, header');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('class') || 'home';
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove('active');

    const linkText = link.textContent.trim().toLowerCase();
    if (
      (linkText === 'home' && current.includes('header')) ||
      (linkText === 'about us' && current.includes('about-section')) ||
      (linkText === 'services' && current.includes('services-section')) ||
      (linkText === 'contact' && current.includes('contact-section'))
    ) {
      link.classList.add('active');
    }
  });
});
