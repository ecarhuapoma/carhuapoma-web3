import {
    gsap
} from "gsap";
//ea
gsap.from('h1', {
    opacity: 0,
    y: 200,
    duration: 5
});

gsap.utils.toArray("h1").forEach(h1 => {
    let hover = gsap.to(h1, {
        scale: 1.12,
        color: "blue",
        duration: 1.5,
        paused: true,
        ease: "power1.inOut"
    });
    h1.addEventListener("mouseenter", () => hover.play());
    h1.addEventListener("mouseleave", () => hover.reverse());
});

// gsap.utils.toArray("myButton").forEach(myButton => {
//     let hover = menuAnimation.to(".stagger-btns",{y:"+=50",duration:1,paused:true});
//     myButton.addEventListener("mouseenter", () => hover.play());
//     myButton.addEventListener("mouseleave", () => hover.reverse());
//   });/