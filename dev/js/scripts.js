import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//gsap.from("#box",{duration:2, scrollTrigger:{
    //trigger:"#box",
    //toggleActions:"play none none reverse",
    //start:"bottom 70%",
    //end:"top 30%",
    //markers:true
    //},
    //scale:2, 
    //rotation:360, 
    //x:"-=600%"});



function boxAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#box",
            toggleActions: "play none play reverse",
            scrub:true,
            start:"bottom 70%",
            end:"top 20%",
            markers:false
         }});

        tl.from("#box",{duration:3, scale:2, rotation:360, x:"-=1000%"})
    ;

    return tl;

}

function textAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-2 p",
            toggleActions: "play rest none reverse",
            scrub:true,
            start:"top 10%",
            end:"bottom 30%",
            markers:true
         }});

        tl.to("#section-2 p",{duration:2, y:"+=350", scale:.75})
    ;

    return tl;

}

function heroAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-1 h1",
            toggleActions: "play none none reverse",
            scrub:true,
            start:"top 30%",
            end:"bottom 20%",
            markers:false
         }});

        tl.to("#section-1 h1",{duration:2, rotation:360, scale:1.5})
    ;

    return tl;

}

function hero2Animation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-3 h1",
            toggleActions: "play none none reverse",
            scrub:true,
            start:"top 30%",
            end:"bottom 20%",
            markers:true
         }});

        tl.to("#section-3 h1",{duration:2, rotation:360, scale:1.5})
    ;

    return tl;

}

let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
    .add(textAnimation())
    .add(boxAnimation())
    .add(hero2Animation());
   
    