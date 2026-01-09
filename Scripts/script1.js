gsap.from(".login-card", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
});

gsap.from(".login-card input, .google-btn, .login-btn", {
    y: 15,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.4
});
