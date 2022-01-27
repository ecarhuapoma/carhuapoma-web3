import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#welcome_section","#history_section","#cuisine_section","#destinations_section","#travel_section","#weather_section"];

export function scrollPage(index){
    gsap.to(window, {duration: 1, scrollTo:idArray[index]});
}