import { gsap } from "gsap";

//QUIZ

//PART 1
let tl = gsap.timeline();
gsap.registerEase;

tl.fromTo(".graph",{duration:2, opacity: 0}, {duration: 2, opacity: 1})
.from(".red", {duration:1, x: 0, ease:1}) 
.from(".blue", {duration:1, x: 350, ease:1})
.to(".red", {duration: 2, y: 2, ease:1}) 
.to("blue", {duration: 2, y: -300, ease:1});


