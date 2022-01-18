import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function scrollAnimation(animationElement, triggerElement){
    console.log("this works");
    const tl = new gsap.timeline();
    
    tl.fromTo(animationElement,
        {
            alpha:0,
            y:"-=70"
        },
        
        {
            alpha:1,
            y: "+=50",

            scrollTrigger:{
                trigger: triggerElement,
                start: "top 10%",
                end: "bottom 30%",
                toggleActions: "restart none resume none",
                scrub:true

            }
        });
}

export function scrollAnimationPointFive(animationElement, triggerElement){
    console.log("this works");
    const tl = new gsap.timeline();
    
    tl.fromTo(animationElement,
        {
            alpha:0,
            y:"-=60"
        },
        
        {
            alpha:1,
            y: "+=50",

            scrollTrigger:{
                trigger: triggerElement,
                start: "top 70%",
                end: "bottom 80%",
                toggleActions: "restart none resume none",
                scrub:true

            }
        });
}

export function scrollAnimationAppear(animationElement, triggerElement){
    console.log("this works");
    const tl = new gsap.timeline();
    
    tl.fromTo(animationElement,
        {
            alpha:0
            
        },
        
        {
            alpha:1,
            

            scrollTrigger:{
                trigger: triggerElement,
                start: "top 60%",
                end: "bottom 70%",
                toggleActions: "restart none resume none",
                scrub:true
            }
        });
}

export function scrollAnimation2(animationElement, triggerElement){
    console.log("this works 2");
    const tl = new gsap.timeline();
    tl.fromTo(animationElement,
        { 
            alpha: 0,
            x: "+=60"
        },
        
        {
            alpha: 1,
            x: "-=60",
       
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 60%",
                end: "bottom 70%",
                toggleActions: "restart none resume none",
                scrub: true
                }
            });

}

export function scrollAnimation3(animationElement, triggerElement){
    console.log("this works 2");
    const tl = new gsap.timeline();
    tl.fromTo(animationElement,
        { 
            alpha: 0,
            x: "-=60"
        },
        
        {
            alpha: 1,
            x: "+=60",
       
            scrollTrigger: {
                trigger: triggerElement,
                start: "top 60%",
                end: "bottom 70%",
                toggleActions: "restart none resume none",
                scrub: true
                }
            });

}


