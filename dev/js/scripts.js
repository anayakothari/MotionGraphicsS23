import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MotionPathPlugin, TextPlugin, DrawSVGPlugin, GSDevTools);

const mainTL = gsap.timeline();

mainTL.fromTo("#musicschool", {duration:1, y: '700%'},{duration: 2, y: '0%', ease: 'bounce.out'})
.to("#s", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#e", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#t1", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#t2", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#l", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#e2", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#m", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#e3", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#n", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#t3", {duration:.15, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.from("#logomark", {duration:2,x:"-=1000%", rotation: 180})


;



GSDevTools.create();


