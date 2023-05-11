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
            start:"bottom 70%",
            end:"top 20%",
            markers:true
         }});

        tl.from("#box",{duration:2, scale:2, rotation:360, x:"-=600%"})
    ;

    return tl;

}

function textAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-2 p",
            toggleActions: "play rest none reverse",
            start:"center",
            end:"bottom 20%",
            markers:true
         }});

        tl.to("#section-2 p",{duration:2, scale:3})
    ;

    return tl;

}

function heroAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#section-1 h1",
            toggleActions: "play rest none reverse",
            start:"top 30%",
            end:"bottom 20%",
            markers:true
         }});

        tl.to("#section-1 h1",{duration:2, rotation:360, scale:1.5})
    ;

    return tl;

}

let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
    .add(textAnimation())
    .add(boxAnimation());
    //.add(boxAnimation())
    //.add(hikingAnimation())
    //.add(hero2Animation())
    