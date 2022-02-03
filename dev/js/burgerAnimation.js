import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".burger-lines",{transformOrigin:"center"});
gsap.set(".burger-lines:nth-child(2)",{drawSVG:"0% 22.5%"});
gsap.set(".burger-lines:nth-child(3)",{drawSVG:"77.5% 100%"});
// gsap.set("#outline",{drawSVG: "0%"});

const topTL = new gsap.timeline();
topTL.to(".burger-lines:nth-child(1)",{duration:0.25})
.to(".burger-lines:nth-child(1)",{stroke:"#FFF", duration:0.25, rotation:-45});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(2)",{duration:0.25})
.to(".burger-lines:nth-child(2)",{drawSVG:"37% 62%",stroke:"#FFF",duration:0.25})
.to(".burger-lines:nth-child(3)",{drawSVG:"50% 50%",stroke:"#FFF",duration:0.25},"-=.25");
// const middleTL = new gsap.timeline();
// bottomTL.to(".burger-lines:nth-child(3)",{duration:0.25})
// .to(".burger-lines:nth-child(3)",{drawSVG:"50% 50%",duration:0.25});


// const middleTL = new gsap.timeline();
// middleTL.to(".burger-lines:nth-child(2)",{duration:0.25, scale:0, fill:"#FFF"})
// .to("#outline",{duration:0.25, drawSVG:"100%", stroke:"#FFF"});


export const burgerTL = new gsap.timeline({paused:true});


burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger")
    // .add(middleTL,"burger")


