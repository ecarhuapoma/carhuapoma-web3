import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#welcome_section","#history_section","#cuisine_section","#destinations_section","#travel_section","#weather_section"];

export function scrollPage(index){
    gsap.to(window, {duration: 2, scrollTo:idArray[index-1]});
}