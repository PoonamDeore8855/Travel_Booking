gsap.registerPlugin(ScrollTrigger);

// Navbar
gsap.from(".navbar", {
    y: -80,
    opacity: 0,
    duration: 1
});

// Hero
gsap.from(".hero-content h1", {
    y: 80,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

gsap.from(".hero-content p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6
});

// Cards
gsap.from(".package-card", {
    scrollTrigger: {
        trigger: ".packages",
        start: "top 80%"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: "power3.out"
});

// MODAL
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".package-card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "flex";
        modalTitle.innerText = card.dataset.title;

        gsap.from(".modal-content", {
            scale: 0.8,
            opacity: 0,
            duration: 0.4
        });
    });
});

closeBtn.onclick = () => modal.style.display = "none";
