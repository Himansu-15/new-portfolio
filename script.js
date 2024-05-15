var tl = gsap.timeline();

tl.from(".header a",  {
  y: -100,
  duration: 1,
  delay: 0.6,
  opacity: 0,
  stagger: 0.2,
});

tl.from(".home-content h3, .home-content h1, .home-content p, .social-media>a>i, a>.btn, .home-img", {
  y: 50,
  opacity: 0,
  stagger: 0.3,
  delay:0.5,
});

// Toggle Icon navbar

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onClick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active')
}

// Scroll section active link

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle icon and navbar
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active')
};

// scroll reveal
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 300,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed js
const typed = new Typed('.multiple-text', {
  strings: ['MERN Developer', 'Trader', 'Youtuber'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
