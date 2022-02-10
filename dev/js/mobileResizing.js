import { gsap } from "gsap";
// import { _removeLinkedListItem } from "gsap/gsap-core";



export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuWidth = menu.offsetWidth;
    

    console.log("chcecking window size");
    // console.log(menuHeight);


    
   // check the view port view and see if the menu needs to be moved
   if(window.innerWidth <= 1048){
    console.log("mobileee");
    gsap.set("#nav-container",{x:menuWidth});
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
    if(window.innerWidth <= 1048){
        console.log(window.innerWidth);

        navButtonsAnimate.forEach((link,i) =>{
            const inHouseTL1 = new gsap.timeline({paused:true});
                inHouseTL1.to(navButtonsAnimate[i],{duration:.5,y:"-=15",ease:"back.inOut(1)",yoyo:true,repeat:-1});
                
            link.addEventListener("mouseenter",()=>{
                inHouseTL1.play();
            });

            link.addEventListener("mouseleave",()=>{
                inHouseTL1.pause();
                gsap.set(navButtonsAnimate[i],{y:+20});
                // console.log("cursor-left");
                // gsap.to(navButtonsAnimate[i],{duration:.3});
                // gsap.set(navButtonsAnimate[i],{x:0,repeat:1,yoyo:false});
            });
        });
    }else{
        console.log(window.innerWidth);
        navButtonsAnimate.forEach((link,i) => {
            const inHouseTL = new gsap.timeline({paused:true});
                inHouseTL.to(navButtonsAnimate[i],{duration:1,x:"-=20",yoyo:true,repeat:-1});
                
            link.addEventListener("mouseenter", ()=>{
                inHouseTL.play();
            });

            link.addEventListener("mouseleave", ()=>{
                // gsap.to(navButtonsAnimate[i],{duration:.3,x:0,yoyo:true,repeat:1});
                // gsap.to(navButtonsAnimate[i],{duration:.3});
                // gsap.set(navButtonsAnimate[i],{x:0,repeat:1,yoyo:false});
                // const inHouseTL = new gsap.timeline({paused:true});
                // inHouseTL.to(navButtonsAnimate[i],{duration:.3,ease:"power1.toFrom",x:"-=20",yoyo:true,repeat:-1});
                
                inHouseTL.pause();
                gsap.set(navButtonsAnimate[i],{x:0});
            });
        });
    }
}
