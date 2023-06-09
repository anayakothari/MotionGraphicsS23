import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(MorphSVGPlugin, GSDevTools);

const mainTL = gsap.timeline();



mainTL.to("#firstsquare",{duration:.8,scale: 1})
.to("#firstsquare",{duration:.8, morphSVG:"#secondsequence1", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#secondsequence2", fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#secondsequence3", fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#secondsequence4", fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#diamond1", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#diamond2", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#diamond3", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#diamond4", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow1", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow2", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow3", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow4", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow5", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow6", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow7", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#grow8", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final1", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final2", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final3", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final4", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final5", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final6", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final7", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final8", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final9", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final10", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final11", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final12", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final13", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final14", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final15", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#firstsquare",{duration:.8, morphSVG:"#final16", scale: .8, fill: "#DF6436", stroke: "#DF6436"})
.to("#s",{duration: 0.6, opacity: 1, delay:.2})
.to("#y",{duration: 0.6, opacity: 1, delay:.2})
.to("#n",{duration: 0.6, opacity: 1, delay:.2})
.to("#a",{duration: 0.6, opacity: 1, delay:.2})
.to("#p",{duration: 0.6, opacity: 1, delay:.2})
.to("#s2",{duration: 0.6, opacity: 1, delay:.2})
.to("#e",{duration: 0.6, opacity: 1, delay:.2})




//.to("#firstsquare",{duration:.8, morphSVG:"#squareformation"})
//.to("#firstsquare",{duration:.8, morphSVG:"#squareformgrow"})
//.to("#firstsquare",{duration:.8, morphSVG:"#finallogo"})
//.to("#s",{duration: 0.6, opacity: 1, delay:.2})
//.to("#y",{duration: 0.6, opacity: 1, delay:.2})
//to("#n",{duration: 0.6, opacity: 1, delay:.2})
//.to("#a",{duration: 0.6, opacity: 1, delay:.2})
//.to("#p",{duration: 0.6, opacity: 1, delay:.2})
//.to("#s2",{duration: 0.6, opacity: 1, delay:.2})
//.to("#e",{duration: 0.6, opacity: 1, delay:.2})


;

GSDevTools.create();

