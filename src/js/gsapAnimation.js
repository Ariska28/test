import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function appearElemntsByOrder() {
  const tl = gsap.timeline({});
  const headerEffects = { y: -100, duration: 0.8};

  tl.from("[data-header-logo]", headerEffects)
    .from("[data-header-nav1]",headerEffects)
    .from("[data-header-nav2]", headerEffects)
    .from("[data-header-registration]", headerEffects)
    .from("[data-header-language]", headerEffects)
    .from("[data-text-appear]", {y: -100, duration: 1, ease: "power3.out", stagger: 0.1})
    .from("[data-animation-grow]", { scaleX: 0, scaleY: 0, duration: 1.5}, "<")
    .to("[data-animation-top]", {y: 10, duration: 1}).timeScale(1.6)
    .from("[animation-card-container]", {opacity: 0, duration: 1})
}

export function createCircleAnimation() {
  gsap.to("[data-animation-circle]", {
    scrollTrigger:{
        trigger: "[data-animation-circle]",
        start: "top bottom", 
        toggleActions: 'resume resume resume resume', 
        scrub: true,
        end: "+=8000",
    },
    rotation: 360,
  });
}

export function createCardsAnimation() {
  const tl1 = gsap.timeline();

  document.querySelectorAll("[data-animation-card]").forEach((el, i)=> {
      tl1.from(el, {yPercent: 100});
  })

  ScrollTrigger.create({
      animation: tl1,
      trigger: '[animation-card-container]',
      start: 'top top',
      end: "+=6000",
      scrub: true,
      pin: true,
  })
}

