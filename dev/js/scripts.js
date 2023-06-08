import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, TextPlugin, DrawSVGPlugin, GSDevTools);

const mainTL = gsap.timeline();

mainTL.to("#s", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#e", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#t1", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#t2", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#l", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#e2", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#m", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#e3", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#n", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.to("#t3", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1 })
.fromTo("#musicschool", {duration:1, x: '-400%'},{duration: 2, x: '0%', ease: 'bounce.out'})
.from("#logomark", {duration:2,x:"-=1000%", rotation: 360})


;



GSDevTools.create();


