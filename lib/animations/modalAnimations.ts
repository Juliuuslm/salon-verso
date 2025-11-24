import gsap from "gsap";

/**
 * MODAL ANIMATIONS
 * Premium entrance/exit animations for modals using GSAP
 */

export const animateModalIn = (
  modal: HTMLElement,
  overlay: HTMLElement
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  // Overlay fade-in con blur progresivo
  tl.fromTo(
    overlay,
    {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    {
      opacity: 1,
      backdropFilter: "blur(24px)",
      duration: 0.3,
      ease: "power2.out",
    },
    0
  );

  // Modal: scale + translate + opacity
  tl.fromTo(
    modal,
    {
      scale: 0.9,
      opacity: 0,
      y: 20,
    },
    {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.2" // Overlap con overlay
  );

  // Staggered content fade-in
  const contentElements = modal.querySelectorAll("[data-animation='fade-in']");
  if (contentElements.length > 0) {
    contentElements.forEach((element, index) => {
      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        `-=${0.25 - index * 0.05}` // Stagger effect
      );
    });
  }

  return tl;
};

export const animateModalOut = (
  modal: HTMLElement,
  overlay: HTMLElement
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  // Modal: scale + opacity out
  tl.to(
    modal,
    {
      scale: 0.95,
      opacity: 0,
      y: 10,
      duration: 0.25,
      ease: "power2.in",
    },
    0
  );

  // Overlay: fade out + blur out
  tl.to(
    overlay,
    {
      opacity: 0,
      backdropFilter: "blur(0px)",
      duration: 0.2,
      ease: "power2.in",
    },
    0 // Start at same time as modal
  );

  return tl;
};

/**
 * Hover animation para images
 */
export const animateImageHover = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1.05,
    brightness: 1.1,
    duration: 0.3,
    ease: "power2.out",
  });
};

export const animateImageHoverOut = (element: HTMLElement) => {
  gsap.to(element, {
    scale: 1,
    brightness: 1,
    duration: 0.3,
    ease: "power2.out",
  });
};

/**
 * Checkmark draw animation (SVG)
 */
export const animateCheckmarkDraw = (
  checkmarks: NodeListOf<SVGSVGElement>
) => {
  const tl = gsap.timeline();

  checkmarks.forEach((checkmark, index) => {
    const path = checkmark.querySelector("path");
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      tl.to(
        path,
        {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        index * 0.1 // Stagger each checkmark
      );
    }
  });

  return tl;
};

/**
 * Pulse animation para icons
 */
export const animateIconPulse = (element: HTMLElement) => {
  const tl = gsap.timeline({ repeat: -1 });

  tl.to(element, {
    opacity: 0.6,
    scale: 0.95,
    duration: 0.8,
    ease: "sine.inOut",
  }).to(
    element,
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "sine.inOut",
    },
    0
  );

  return tl;
};

/**
 * Staggered list reveal
 */
export const animateListReveal = (
  items: NodeListOf<HTMLElement>,
  startDelay = 0
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  items.forEach((item, index) => {
    tl.fromTo(
      item,
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      startDelay + index * 0.08
    );
  });

  return tl;
};

/**
 * Hero image parallax
 */
export const setupImageParallax = (
  image: HTMLElement,
  container: HTMLElement
) => {
  const handleScroll = () => {
    const rect = container.getBoundingClientRect();
    const scrolled = -rect.top;
    const parallaxOffset = scrolled * 0.3; // 30% of scroll

    gsap.to(image, {
      y: parallaxOffset,
      duration: 0.2,
      overwrite: "auto",
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};

/**
 * Gradient animation on button hover
 */
export const animateGradientHover = (button: HTMLElement) => {
  const gradient = button.querySelector("[data-gradient]") as HTMLElement;
  if (!gradient) return;

  gsap.to(gradient, {
    width: "100%",
    duration: 0.4,
    ease: "power2.out",
  });
};

export const animateGradientHoverOut = (button: HTMLElement) => {
  const gradient = button.querySelector("[data-gradient]") as HTMLElement;
  if (!gradient) return;

  gsap.to(gradient, {
    width: "0%",
    duration: 0.3,
    ease: "power2.out",
  });
};
