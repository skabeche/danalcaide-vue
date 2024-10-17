import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export const useAnimationTimeline = (element, type = 'fade-down', delay = .3) => {

  const optionsAnimation = {
    'fade': {
      duration: .4,
    },
    'fade-up': {
      y: 40,
      duration: .3,
    },
    'fade-right': {
      x: -90,
      duration: .3,
    },
    'fade-down': {
      y: -40,
      duration: .3,
    },
    'fade-left': {
      x: 90,
      duration: .3,
    }
  }

  optionsAnimation[type].opacity = 0;
  // Remove delay on low resolutions.
  optionsAnimation[type].delay = window.matchMedia('(max-width: 1024px)').matches ? 0 : delay;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      toggleActions: "restart none none none",
      start: "top bottom",
    }
  });

  tl.from(element, optionsAnimation[type]);
};
