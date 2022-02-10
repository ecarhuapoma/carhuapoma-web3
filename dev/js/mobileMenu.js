import { gsap } from "gsap";

let menuScrollable = true;
// let sidebarLocation = window.clientWidth/=4;

export const menuAnimation = new gsap.timeline({paused:true});
// export const buttonMove = new gsap.timeline({paused:true});

export function screenLocker(){if(menuScrollable === true){
        window.onscroll = function(){window.scrollTo(0, 0);};
        menuScrollable = false;
    }
    else{
        window.onscroll = function(){};
        menuScrollable = true;
    }
}
// gsap.set("#nav-container",{y:0,x:"+=300"});
// gsap.set(".stagger-btns",{y:-60});
menuAnimation.to("#nav-container",{duration:0.75, ease:"power2.inOut",x:0,y:0, alpha:1});
menuAnimation.to(".stagger-btns",{stagger:.1,duration:0.1,ease:"power4.inOut",y:"+=20", x:0, alpha:1},"-=.25");

if(window.clientWidth <= 1024){
    gsap.set("#nav-container",{alpha:0});
}

console.log("the animatiodawdn is firidawdawdng");
