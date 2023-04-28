import { gsap } from "gsap";

//QUIZ

//PART 1
let tl = gsap.timeline();

tl.from("box red", {duration:1, x: 0, ease:"power4.easeOut"})
.from("box blue", {duration:1, x: 350, ease: "power4.easeOut"})
