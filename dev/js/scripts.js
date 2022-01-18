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