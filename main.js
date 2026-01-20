const reveals = document.querySelectorAll(".section, .hero, .site-footer");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});
