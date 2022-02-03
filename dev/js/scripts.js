// import $ from "jquery";

// let $nav = $('nav[data-nav]');
// let isVisible = false;

// $(".nav-btns").on("click", function(){
//     // console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// })
// import { gsap } from "gsap";

import {scrollAnimationPointFive, scrollAnimationAppear, scrollAnimation2, scrollAnimation3} from "./scrollAnimation"
import { burgerTL } from "./burgerAnimation";
import { menuAnimation, buttonMove } from "./mobileMenu";
import { scrollPage } from "./pageScroll";
import { displayWindowSize } from "./mobileResizing";



var burgerButton = document.querySelector("#burger_container");
let canISeeMenu = false;

burgerButton.addEventListener("click", openCloseMenu);

function openCloseMenu(){
    console.log("a click occured");
    if(canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
        console.log("it read the function");
    }
    else{
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}


// (".stagger-btns",{scale:"+=1",duration:2});

function buttonFunct(){
    // gsap.to(".stagger-btns",{paused:true,y:"+=40",duration:2});
    buttonMove.play();
    console.log("mouse entered");   
}

function antiButton(){
    buttonMove.reverse();
}

let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("mouseenter", buttonFunct);
    button.addEventListener("mouseleave", antiButton);
    button.addEventListener("click", openCloseMenu);
}

function checkScrolling(e) {
    
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

window.addEventListener("resize", displayWindowSize);
window.addEventListener('load', displayWindowSize); 

// burgerButton.addEventListener("click", function(){
//     // console.log("button cliiiiick");

//     burgerTL.play();
// });


window.addEventListener('load', function(){
    // scrollAnimation("#welcome-content","#title_banner");
    scrollAnimationPointFive("#little","#rome_image");
    scrollAnimation2("#church_image","#little");
    scrollAnimation3("#sardinia_image","#little");
    scrollAnimation3(".crunchy","#church_image");
    scrollAnimation2(".crunchy2","#church_image");
    scrollAnimationAppear(".namename","#annoying_grid");
    scrollAnimationAppear(".headname","#rome_image");
});