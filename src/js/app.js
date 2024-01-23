import { Cursor } from "./cursor";
import { createCardsAnimation, createCircleAnimation, appearElemntsByOrder } from "./gsapAnimation";

const elemensForCursor = document.querySelectorAll('[data-card]');
export function stopScrollBody() {
  document.body.classList.toggle('no-scroll');
}
export function addCustomCursor(elemens) {
  elemens.forEach((el) => {
    const cursor = document.querySelector('[data-test]');

    el.addEventListener('mouseenter', () => {
      cursor.classList.add('is-visible')
    })

    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-visible')
    })
  })

  new Cursor();
}

document.querySelector('[open-menu-btn]').addEventListener("click",() => {
  stopScrollBody()
});

if (window.matchMedia("(min-width: 1024px)").matches) {
  appearElemntsByOrder();
  createCircleAnimation();
  createCardsAnimation();
  addCustomCursor(elemensForCursor);
}
