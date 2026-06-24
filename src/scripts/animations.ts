import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initAnimations() {
  const scrollItems = document.querySelectorAll(".js-animate");

  scrollItems?.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight * 0.9;

    if (alreadyVisible) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => item.classList.add("is-show"));
      });
    }

    ScrollTrigger.create({
      trigger: item,
      start: "top 90%",
      end: "bottom 100px",
      scrub: true,
      onEnter: () => item.classList.add("is-show"),
      onLeaveBack: () => item.classList.remove("is-show"),
    });
  });
}
