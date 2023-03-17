const images = document.querySelectorAll('.lazyload, .image-container');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add('is-visible');
      observer.unobserve(img);
    }
  });
}, options);

images.forEach(img => {
  observer.observe(img);
});

function checkScroll() {
  images.forEach(image => {
    const windowHeight = window.innerHeight;
    const imageTop = image.getBoundingClientRect().top;
    const imageHeight = image.offsetHeight;
    const imageBottom = imageTop + imageHeight;

    const inView = (imageTop <= windowHeight && imageBottom >= 0);

    if (inView) {
      image.classList.add("image-fade-in");
    } else {
      image.classList.remove("image-fade-in");
    }
  });
}

// Trigger checkScroll function on page load
checkScroll();

window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);
