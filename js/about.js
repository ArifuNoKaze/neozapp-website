function closePopup() {
  document.getElementById("popup").style.display = "none";
}

window.addEventListener("load", () => {
  // Biar animasi fade tetap jalan
  const fadeSections = document.querySelectorAll(".fade-section");
  fadeSections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add("show");
    }, index * 300);
  });

  // Tampilkan popup
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 500); // Muncul 0.5 detik setelah load
});
