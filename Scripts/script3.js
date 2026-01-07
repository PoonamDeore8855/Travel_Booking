gsap.registerPlugin(ScrollTrigger);

// Card animation
gsap.from(".package-card", {
  scrollTrigger: {
    trigger: ".packages",
    start: "top 80%"
  },
  y: 80,
  opacity: 0,
  duration: 1,
  stagger: 0.15
});

// MODAL LOGIC
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".package-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.innerText = card.dataset.title;
  });
});

closeBtn.onclick = () => modal.style.display = "none";

// BOOK NOW
document.querySelectorAll(".book-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    localStorage.setItem("selectedPackage", btn.dataset.package);

    if (localStorage.getItem("loggedInUser")) {
      window.location.href = "./Booknow.html";
    } else {
      window.location.href = "./auth.html";
    }
  });
});
