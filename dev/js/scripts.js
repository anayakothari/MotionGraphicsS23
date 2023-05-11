import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from("#box",{duration:2, scrollTrigger:{
    trigger:"#box",
    toggleActions:"play pause resume reverse",
    start:"bottom 70%",
    end:"top 30%",
    markers:true
    },
    scale:2, 
    rotation:180, 
    x:"-=600%"});