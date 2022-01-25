import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#cuisine_section","#destinations_section","#history_section","travel_section","weather_section"];

export function scrollPage(index){
    gsap.to(window, {duration: 3, scrollTo:idArray[index]});
}