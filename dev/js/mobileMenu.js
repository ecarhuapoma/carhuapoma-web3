import { gsap } from "gsap";

export const menuAnimation = new gsap.timeline({paused:true});
export const buttonMove = new gsap.timeline({paused:true});
// gsap.set(".stagger-btns",{y:-60});
menuAnimation.to("#nav-container",{duration:0.5, ease:"power4.inOut",y:0, x:0});
menuAnimation.to(".stagger-btns",{stagger:.2,duration:0.5,ease:"power4.inOut",y:"+=20", x:0, alpha:1},"-=.25");


buttonMove.to(".stagger-btns",{scale:1.1,duration:.1});



// let hover=menuAnimation.to(".stagger-btns",{scale:"+=1",duration:2});

// button.addEventListener("mouseenter", () => hover.play());


console.log("the animatiodawdn is firidawdawdng");
