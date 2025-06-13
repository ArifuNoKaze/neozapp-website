const swiper = new Swiper(".mySwiper",{
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
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

