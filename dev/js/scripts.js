import {
    gsap
} from "gsap";

gsap.from("#logo", {
    duration: 1.5,
    alpha: 0,
    delay: 0.5
});

gsap.from("nav li", {
    duration: 2,
    alpha: 0,
    stagger: .4,
    y: "-=20",
    delay: 1
});

gsap.from(".h2", {
    duration: 2,
    y: "-=20",
    delay: .5
});

gsap.to("#hero", {
    duration: 2,
    y: "-=20",
    delay: 2.5
});