const swiper = new Swiper(".mySwiper",{
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    on: {
      slideChange: function () {
        const activeSlide = this.slides[this.activeIndex];
        const bg = activeSlide.getAttribute('data-bg');
        document.querySelector('.bg-blur').style.backgroundImage = `url(${bg})`;
      }
    }
});

//Window in first load
window.addEventListener("load", () => {
  const firstBg = document.querySelector('.swiper-slide-active').getAttribute('data-bg');
  document.querySelector('.bg-blur').style.backgroundImage = `url(${firstBg})`;
});

// Fade Section

window.addEventListener("load", () => {
  const fadeSections = document.querySelectorAll(".fade-section");
  fadeSections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("show");
    }, index * 300); // Muncul berurutan
  });
});

