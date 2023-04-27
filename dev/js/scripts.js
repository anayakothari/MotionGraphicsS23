import {
    gsap
} from "gsap";

let mainTl = gsap.timeline({delay:1});

function animate() {
    const tl = gsap.timeline({paused: true});
  
    tl.from("#logo", {
      duration: 1.5,
      alpha: 0,
      delay: 0.5
    })
    .from("nav li", {
      duration: .5,
      alpha: 0,
      stagger: .4,
      y: "-=20",
      delay: 1
    })
    .from(".h2", {
      duration: 2,
      y: "+=30",
      delay: .5
    })
    .from("#button", {
      duration: 2,
      x: "-=1000",
      delay: .5
    })
    .to("#hero", {
      duration: 2,
      y: "-=20",
      delay: 2.5
    })
    .to("#content", {
      duration: 1,
      rotation: 360,
      delay: .5
    });
  
    return tl;
  }
  
  const mainTimeline = animate();
  