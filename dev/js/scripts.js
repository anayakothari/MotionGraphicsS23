import { gsap } from "gsap";

//QUIZ

//PART 1
let tl = gsap.timeline();

tl.fromTo("box red", {duration:1, x: 0, ease:"power4.easeOut"}, {duration: 2, y: 2, ease: "power4.easeOut" })
.fromTo("box blue", {duration:1, x: 350, ease: "power4.easeOut"}, {duration: 2, y: 300, ease: "power4.easeOut"})

