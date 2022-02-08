import { gsap } from "gsap";
// import { _removeLinkedListItem } from "gsap/gsap-core";

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


let navButtonsAnimate = document.querySelectorAll(".stagger-btns");
console.log(navButtonsAnimate.length);

export function menuListner(){
    console.log("hovered!!");
    if(window.innerWidth <= 1048){

        navButtonsAnimate.forEach((link,i) =>{
            link.addEventListener("mouseenter",()=>{
                console.log("cursor-inside")
                gsap.to(navButtonsAnimate[i],{duration:.3,scale:1.15,ease:"power3"})
            })

            link.addEventListener("mouseleave",()=>{
                console.log("cursor-left");
                gsap.to(navButtonsAnimate[i],{duration:.3,scale:1,ease:"power3"});
            })
        });
    }else{
        navButtonsAnimate.forEach((link,i) => {
            link.addEventListener("mouseenter", ()=>{
                gsap.to(navButtonsAnimate[i],{duration:.3,scale:1.15,ease:"power3"})
            })

            link.addEventListener("mouseleave", ()=>{
                gsap.to(navButtonsAnimate[i],{duration:.3,scale:1,ease:"power3"})
            })
        });
    }
}
