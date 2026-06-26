export function initCursor() {
  const cursor = document.querySelector(".js-cursor") as HTMLElement;
  if (!cursor) return;

  let hasMovedMouse = false;

  document.addEventListener("mousemove", (e) => {
    if (!hasMovedMouse) {
      hasMovedMouse = true;
      cursor.classList.add("is-visible");
    }
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll("[data-cursor-expand]").forEach((el) => {
    el.addEventListener("mouseenter", () =>
      cursor.classList.add("is-expanded"),
    );
    el.addEventListener("mouseleave", () =>
      cursor.classList.remove("is-expanded"),
    );
  });
}
