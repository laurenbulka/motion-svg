import {gsap} from "gsap";
import {wheelTL} from "./ferriswheel.js";

const mainTl = gsap.timeline();
mainTl.add(wheelAnimation());
