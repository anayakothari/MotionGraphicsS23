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
            toggleActions: "play none none reverse",
            start:"bottom 70%",
            end:"top 30%",
            markers:true
         }});

    tl.from("#box", {duration:2, scale:2, rotation:360, x:"-=600%"})
    ;

    return tl;

}

let mainTl = gsap.timeline();
mainTl.add(boxAnimation());
    //.add(boxAnimation())
    //.add(hikingAnimation())
    //.add(hero2Animation())
    