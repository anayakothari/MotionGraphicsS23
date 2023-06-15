import { gsap } from "gsap";
import { EasePack } from "gsap/EasePack";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(EasePack, TextPlugin, DrawSVGPlugin, Physics2DPlugin, GSDevTools);

const mainTL = gsap.timeline();

mainTL.to("#logomark", {duration: 0.5, physics2D: {velocity: 100, angle: 0}})
.to("#logomark", {duration: 0.5, physics2D: {gravity: 0}})
.from("#logomark", {duration:1.5,x:"-=300%", ease: 'elastic', yoyo: true})
.fromTo(["#s", "#e", "#t1", "#t2", "#l", "#e2", "#m", "#e3", "#n", "#t3"], {duration:1, y: '-800%'},{duration: 1, y: '0%', ease: 'elastic'})
.to("#s", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#e", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#t1", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#t2", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#l", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#e2", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#m", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#e3", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#n", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.to("#t3", {duration:.1, y: -10, ease: 'bounce.out', yoyo: true, repeat: 1})
.fromTo("#musicschool", {duration:1, y: '700%'},{duration: 2, y: '0%', ease: 'elastic'})




;



GSDevTools.create();


