import {gsap} from "gsap";

gsap.set("#spokes", {transformOrigin: "center"});
gsap.set("#carts", {transformOrigin: "center"});

const wheelTL = gsap.timeline();
wheelTL.from("#spokes",{duration:3,rotation:-360, repeat:4, ease:"none"});
export function wheelAnimation(){
    return wheelTL;
}

const loadingBarTL = gsap.timeline();
loadingBarTL.from("#black-bar", {duration: 15, x:-400})
export function barAnimation(){
    return loadingBarTL;
}
