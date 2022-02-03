import { gsap } from "gsap";

export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuHeight = menu.offsetHeight;
    // let menuWidth = menu.offsetWidth;

    console.log("chcecking window size");
    // console.log(menuHeight);

    
   // check the view port view and see if the menu needs to be moved
   if(document.documentElement.clientHeight <= 1024){
    console.log("hide");
    gsap.set("#nav-container",{y:-menuHeight});
    gsap.set(".stagger-btns",{alpha:0});
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{x:0});
        gsap.set(".stagger-btns",{alpha:1});
    }

}