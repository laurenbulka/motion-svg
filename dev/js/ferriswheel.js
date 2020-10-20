import {gsap} from "gsap";

gsap.set("#spokes", {transformOrigin: "center"});
gsap.set("#carts", {transformOrigin: "center"});

const wheelTL = gsap.timeline();

wheelTL.from("#spokes",{duration:3,rotation:180, repeat:4});
//.from("#carts",{duration:3,rotation:180, repeat:4, delay:-15});

export function wheelAnimation(){
    return wheelTL;
}

//, ease:"none"