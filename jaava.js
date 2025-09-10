// AOS animation init
AOS.init();

// 🌗 Dark mode toggle
document.getElementById("toggle").addEventListener("change", function() {
  document.body.classList.toggle("dark", this.checked);
});
