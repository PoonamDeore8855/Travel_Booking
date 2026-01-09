gsap.registerPlugin(ScrollTrigger);

// Cards animation
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".card-grid",
        start: "top 80%"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});
