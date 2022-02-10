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
import { burgerTL, bounceTL, reOrient } from "./burgerAnimation";
import { menuAnimation, screenLocker } from "./mobileMenu";
import { scrollPage } from "./pageScroll";
import { displayWindowSize, menuListner } from "./mobileResizing";

window.addEventListener('load', menuListner);
window.addEventListener('resize', menuListner);
//ssd


var burgerButton = document.querySelector("#burger_container");
let canISeeMenu = false;


burgerButton.addEventListener("click", openCloseMenu);

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        bounceTL.play();
        canISeeMenu = true;
        screenLocker();
    }
    else{
        burgerTL.reverse();
        menuAnimation.reverse();
        bounceTL.pause();
        reOrient();
        canISeeMenu = false;
        screenLocker();
    }
}

let navButtons = document.querySelectorAll(".nav-btns");

for (const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}

function checkScrolling(e) {
    
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue);
    }
}

window.addEventListener('resize', displayWindowSize);
window.addEventListener('load', displayWindowSize); 

document.querySelector('.hamburger').addEventListener('click', function(){
    
    burgerTL.play();
    burgerTL.reverse();
  })
  



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