import Lenis from "lenis";

export function initNav(lenis: Lenis) {
  const navToggle = document.querySelector(".js-nav-toggle");
  const header = document.querySelector(".js-header");
  const nav = document.querySelector(".js-nav");

  navToggle?.addEventListener("click", () => {
    const isOpen = header?.classList.toggle("open");
    if (isOpen) {
      lenis.stop();
      nav?.removeAttribute("inert");
    } else {
      lenis.start();
      nav?.setAttribute("inert", "");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header?.classList.contains("open")) {
      header.classList.remove("open");
      nav?.setAttribute("inert", "");
      lenis.start();
    }
  });

  nav?.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      header?.classList.remove("open");
      nav.setAttribute("inert", "");

      setTimeout(() => {
        lenis.start();
        const href = (link as HTMLAnchorElement).getAttribute("href");
        const target = href ? document.querySelector(href) : null;
        const scrollPadding =
          parseInt(
            getComputedStyle(document.documentElement).scrollPaddingTop,
          ) || 0;

        if (target) {
          lenis.scrollTo(target as HTMLElement, {
            offset: -scrollPadding,
            duration: 2,
          });
        }
      }, 600);
    });
  });
}
