import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLenis } from "./scripts/lenis";
import { initNav } from "./scripts/nav";
import { initAnimations } from "./scripts/animations";
import { initCursor } from "./scripts/cursor";

gsap.registerPlugin(ScrollTrigger);

const lenis = initLenis();

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initNav(lenis);
  initAnimations();
});
