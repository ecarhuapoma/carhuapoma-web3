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
//     }////
// })

import { scrollAnimation, scrollAnimationPointFive, scrollAnimationAppear, scrollAnimation2, scrollAnimation3} from "./scrollAnimation";
import { burgerTL } from "./burgerAnimation";
import {menuAnimation} from "./mobileMenu"
import {scrollPage} from "./pageScroll"
import { displayWindowSize } from "./mobileResizing"

var burgerButton = document.querySelector("#burger");

burgerButton.addEventListener("click", () =>{
    console.log("BURGER CLICKING")
});









// var burgerButton = document.querySelector("#burger");
// let canISeeMenu = false;

// function openCloseMenu(){
//     if(canISeeMenu === false){
//         // can't see menu... play timeline of burger into X
//         burgerTL.play();
//         menuAnimation.play();
//         canISeeMenu = true;
//     }else{
//         // can see menu.. play X back into burger
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         canISeeMenu = false;
//     }
// }

// burgerButton.addEventListener("click", openCloseMenu);
// let navButtons = document.querySelectorAll(".nav-btns");

// for (const button of navButtons){
//     button.addEventListener("click", checkScrolling);
//     button.addEventListener("click", openCloseMenu);
// }

// function checkScrolling(e) {
//     // check to see which button was clicked
//     const indexValue = [].indexOf.call(navButtons, e.target)
//     if (indexValue != -1) {
//         scrollPage(indexValue);
//     }
// }

window.addEventListener('load', function(){
    
    
    scrollAnimation("#welcome-content","#title_banner");
    scrollAnimationPointFive("#little","#rome_image");
    scrollAnimation2("#church_image","#little");
    scrollAnimation3("#sardinia_image","#little");
    scrollAnimation3(".crunchy","#church_image");
    scrollAnimation2(".crunchy2","#church_image");
    scrollAnimationAppear(".namename","#annoying_grid");
    scrollAnimationAppear(".headname","#rome_image");

    // for(let i = 0; i < triggerElements.length; i++){
    //     // console.log(triggerElements[i]);
    //     if(triggerElements[i] === "#history_section" || triggerElements[i] === "#cuisine_section"){
    //         // console.log(i + " is the index value of triggerElements");
    //     }
    //     if( i === triggerElements.length/2){
    //         scrollAnimation(triggerElements[i], animationElements[i]);
    //     }else{
    //         scrollAnimation3(triggerElements[i], animationElements[i]);
    //     }
    // }
});


//listen to window resize
// window.addEventListener("resize", displayWindowSize);

//check the window size on load
// window.addEventListener('load', displayWindowSize); 
    