const images = document.querySelectorAll(".image-container");

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


