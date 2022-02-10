import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// import gsapCore from "gsap/gsap-core"; 
// import { Timeline } from "gsap/gsap-core";
gsap.registerPlugin(DrawSVGPlugin);



// var upper = document.getElementsByClassName('upper');
// var middle = document.getElementsByClassName('middle');
// var lower = document.getElementsByClassName('lower');

// const burgerTL = new gsap.timeline({paused: true, reversed: true});
//  {attr: {d: "M8,2 L2,8"},  {attr: {d: "M8,8 L2,2"}
// burgerTL
//   .to(".upper", 0.5, {x: 1, ease:"power2.inOut"}, 'start')
//   .to(".middle", 0.5, {autoAlpha: 0}, 'start')
//   .to(".lower", 0.5,{x: 1, ease:"power2.inOut"}, 'start');

// document.querySelector('.hamburger').addEventListener('click', function(){
//   burgerTL.reversed() ? burgerTL.play() : burgerTL.reverse();
// })

// gsap.set(".hamburger",{scale:.25});

gsap.set(".upper",{transformOrigin:"center"});
gsap.set(".lower",{transformOrigin:"center"});
gsap.set(".middle",{transformOrigin:"center"});

const topTL = new gsap.timeline();
topTL.to(".upper",{rotation:45,ease:"back.inOut(1.7)",y:"+=3"});

const middleTL = new gsap.timeline();
middleTL.to(".middle",{alpha:0,duration:.25,scale:.1});

const bottomTL = new gsap.timeline();
bottomTL.to(".lower",{ease:"back.inOut(1.7)",rotation:-45,duration:.25,y:"-=3"});
bottomTL.to(".upper, .lower",{duration:1});
bottomTL.to(".upper, .lower",{duration:.5,stroke:"#FFF"},"-=.5");
// bottomTL.to(".upper",{duration:.5,rotation:270},"-=.5");


// const toneShift = new gsap.timeline();
// toneShift.to(".upper, .lower",{duration:1,stroke:"#FFF"},"-=2");
// toneShift.to(".lower",{duration:1,stroke:"#FFF"},"same");

export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(topTL,"burger")
.add(bottomTL,"burger")
.add(middleTL,"burger");
// .add(toneShift,"burger");

export const bounceTL = new gsap.timeline({paused:true});

// bounceTL.to(".upper",{rotation:45,duration:.5});
// bounceTL.to(".lower",{rotation:-45,duration:.5},"-=.5");
bounceTL.to(".hamburger",{rotation:360,duration:10,repeat:-1, ease: "none"});
// gsap.set(".burger-lines",{transformOrigin:"center"});
// gsap.set(".burger-lines:nth-child(2)",{drawSVG:"0% 22.5%"});
// gsap.set(".burger-lines:nth-child(3)",{drawSVG:"77.5% 100%"});
// // gsap.set("#outline",{drawSVG: "0%"});



// export const reorientTL = new gsap.timeline({paused:true});
//     reorientTL.to(".lower",{rotation:-45,duration:.25,y:"-=3"});
//     reorientTL.to(".upper",{rotation:45,y:"+=3"});
//     reorientTL.to(".hamburger",{x:0,y:0});
    


export function reOrient(){
    gsap.to(".hamburger",{rotate:0,ease:"back.inOut"});
}






// const topTL = new gsap.timeline();
// topTL.to(".burger-lines:nth-child(1)",{duration:0.25})
// .to(".burger-lines:nth-child(1)",{stroke:"#FFF", duration:0.25, rotation:-45});

// const bottomTL = new gsap.timeline();
// bottomTL.to(".burger-lines:nth-child(2)",{duration:0.25})
// .to(".burger-lines:nth-child(2)",{drawSVG:"37% 62%",stroke:"#FFF",duration:0.25})
// .to(".burger-lines:nth-child(3)",{drawSVG:"50% 50%",stroke:"#FFF",duration:0.25},"-=.25");
// // const middleTL = new gsap.timeline();
// // bottomTL.to(".burger-lines:nth-child(3)",{duration:0.25})
// // .to(".burger-lines:nth-child(3)",{drawSVG:"50% 50%",duration:0.25});


// // const middleTL = new gsap.timeline();
// // middleTL.to(".burger-lines:nth-child(2)",{duration:0.25, scale:0, fill:"#FFF"})
// // .to("#outline",{duration:0.25, drawSVG:"100%", stroke:"#FFF"});


// export const burgerTL = new gsap.timeline({paused:true});


// burgerTL.add(topTL,"burger")
//     .add(bottomTL,"burger")
//     // .add(middleTL,"burger")


