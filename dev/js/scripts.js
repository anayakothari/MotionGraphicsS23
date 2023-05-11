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

//let textAnimation = document.getElementsByTagName('p');

function boxAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#box",
            toggleActions: "play play play reverse",
            start:"bottom 70%",
            end:"top 20%",
            markers:true
         }});

    tl.from("#box",{duration:2, scale:2, rotation:180, x:"-=600%"})
    ;

    return tl;

}

function textAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#p",
            toggleActions: "play rest none reverse",
            start:"bottom 50%",
            end:"top 30%",
            markers:true
         }});

    tl.from("#p",{duration:2, scale:2, rotation:360, x:"-=600%"})
    ;

    return tl;

}

let mainTl = gsap.timeline();
mainTl.add(boxAnimation())
    .add(textAnimation());
    //.add(boxAnimation())
    //.add(hikingAnimation())
    //.add(hero2Animation())
    