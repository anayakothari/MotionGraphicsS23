import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MorphSVGPlugin, GSDevTools);

const mainTL = gsap.timeline();



mainTL.to("#firstsquare",{duration:.8,scale: 1})
.to("#firstsquare",{duration:.8, morphSVG:"#breakfour", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#squareformation"})
.to("#firstsquare",{duration:.8, morphSVG:"#squareformgrow"})
.to("#firstsquare",{duration:.8, morphSVG:"#finallogo"})
.to("#s",{duration: 0.6, opacity: 1},'-=0.2')

;

GSDevTools.create();

