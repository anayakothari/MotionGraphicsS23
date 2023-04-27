import {gsap} from "gsap";

let mainTl = gsap.timeline({delay:1});

function logoAni(){

  let tl = gsap.timeline();
  let mm = gsap.matchMedia();

  mm.add("(max-width:767px)", () =>{
  tl.from("#logo", {duration:.5, rotation: 360})
  });

  mm.add("(min-width:768px)", () =>{
    tl.from("#logo", {duration: .5, rotation: 360})
    });


  return tl;
}

mainTl.add(logoAni())

mainTl.from("nav li", {
  duration: .5,
  alpha: 0,
  stagger: {each:0.1},
  from:"start",
  y: "-=20"
  //delay: .5
})
.from(".h2", {
  duration: 1,
  y: "+=30"
  //delay: .5
})
.from("#button", {
  duration: 1,
  x: "-=1000"
  //delay: .5
})
.to("#hero", {
  duration: 1.5,
  y: "-=20"
})
.to("#content", {
  duration: 1.5,
  //x: "-=1100",
  rotation: 360
  //delay: .5
});



function heroAni(){

    let tl = gsap.timeline({delay:1});
    let mm = gsap.matchMedia();

    mm.add("(max-width:767px)", () =>{
    tl.to("#hero", {duration: 1.5, y: "-=20"})
    });

    mm.add("(min-width:768px)", () =>{
    tl.to("#hero", {duration: 1.5, y: "-=20"})
    });


    return tl;
}

mainTl.add(heroAni())
;



  

  
  

  //mainTl.add(logoAni())
  //.add(heroAni())
  //;
