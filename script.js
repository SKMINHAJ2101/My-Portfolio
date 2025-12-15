// Fade-in animation for cards and header
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, .header").forEach(el => observer.observe(el));


// Scroll-to-top button
const topBtn = document.createElement("div");
topBtn.className = "top-btn";
topBtn.textContent = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Read More / Read Less toggle for projects
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const project = btn.closest(".project-card");
    const more = project.querySelector(".project-more");

    more.style.display = more.style.display === "block" ? "none" : "block";
    btn.textContent = more.style.display === "block" ? "Read Less" : "Read More";
  });
});
// Typing animation
const texts = [
  "Aspiring Software Developer",
  "Full Stack Learner",
  "MCA Student",
  "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1500);
  }

  setTimeout(type, 100);
})();
// Dark / Light mode toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});
