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


import { scrollAnimation, scrollAnimationPointFive, scrollAnimationAppear, scrollAnimation2, scrollAnimation3} from "./scrollAnimation"
import { burgerTL } from "./burgerAnimation";
import { menuAnimation } from "./mobileMenu";
import { scrollPage } from "./pageScroll";
import { displayWindowSize } from "./mobileResizing";


var burgerButton = document.querySelector("#burger_container");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }
    else{
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
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

burgerButton.addEventListener("click", openCloseMenu);

window.addEventListener("resize", displayWindowSize);
// burgerButton.addEventListener("click", function(){
//     // console.log("button cliiiiick");

//     burgerTL.play();
// });





window.addEventListener('load', function(){
    scrollAnimation("#welcome-content","#title_banner");
    scrollAnimationPointFive("#little","#rome_image");
    scrollAnimation2("#church_image","#little");
    scrollAnimation3("#sardinia_image","#little");
    scrollAnimation3(".crunchy","#church_image");
    scrollAnimation2(".crunchy2","#church_image");
    scrollAnimationAppear(".namename","#annoying_grid");
    scrollAnimationAppear(".headname","#rome_image");
});