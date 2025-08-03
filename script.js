// script.js

// Smooth-scroll behavior is handled by CSS (scroll-behavior: smooth), 
// so clicking nav anchors will scroll smoothly without extra JS.

// Scroll reveal effect using Intersection Observer
const observerOptions = {
  threshold: 0.2  // trigger when 20% of the element is visible
};
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');  // add class to trigger CSS transition
      observer.unobserve(entry.target);       // stop observing once revealed, so it doesn't re-trigger
    }
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all elements with class 'reveal'
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// (Optional) If implementing a mobile nav toggle, we could add code here to handle menu open/close on small screens.
