import {
    gsap
} from "gsap";

let mainTl = gsap.timeline({delay:1});



function animate() {
    let tl = gsap.timeline({paused: false});
    let mm = gsap.matchMedia();

    
    tl.from("#logo", {
      duration: 1,
      alpha: 0,
      //delay: .5
    })
    .from("nav li", {
      duration: .5,
      alpha: 0,
      stagger: {each:0.1},
      from:"start",
      y: "-=20",
      //delay: .5
    })
    .from(".h2", {
      duration: 1,
      y: "+=30",
      //delay: .5
    })
    .from("#button", {
      duration: 1,
      x: "-=1000",
      //delay: .5
    })
    .to("#hero", {
      duration: 2,
      y: "-=20",
      //delay: 1.5
    })
    .to("#content", {
      duration: 1.5,
      easing: 'ease-in-out',
      x: "-=1100",
      //rotation: 360,
      //delay: .5
    });
  
    return mainTl;
  }
  
mainTimeline = animate();

  mainTl.add("#logo")
  .add("#hero")
  .add("#button")
  .add("nav li")
  .add(".h2")
  .add("#content")
  