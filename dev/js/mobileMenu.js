import { gsap } from "gsap";

let menuScrollable = true;

export const menuAnimation = new gsap.timeline({paused:true});
export const buttonMove = new gsap.timeline({paused:true});

export function screenLocker(){if(menuScrollable === true){
        window.onscroll = function(){window.scrollTo(0, 0);};
        menuScrollable = false;
    }
    else{
        window.onscroll = function(){};
        menuScrollable = true;
    }
}

// gsap.set(".stagger-btns",{y:-60});
menuAnimation.to("#nav-container",{duration:0.75, ease:"power2.inOut",y:0, x:0});
menuAnimation.to(".stagger-btns",{stagger:.2,duration:0.3,ease:"power4.inOut",y:"+=20", x:0, alpha:1},"-=.25");


buttonMove.to(".stagger-btns",{scale:1.1,duration:.1});


// function screenLocker(){
    
// }

// let hover=menuAnimation.to(".stagger-btns",{scale:"+=1",duration:2});

// button.addEventListener("mouseenter", () => hover.play());


console.log("the animatiodawdn is firidawdawdng");
