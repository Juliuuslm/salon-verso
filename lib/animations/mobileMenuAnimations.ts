import gsap from "gsap";

export const animateMobileMenuIn = (
  menuContainer: HTMLElement,
  overlay: HTMLElement
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  // Overlay fade-in
  tl.fromTo(
    overlay,
    { opacity: 0 },
    { opacity: 1, duration: 0.25, ease: "power2.out" }
  );

  // Menu slide down with fade
  tl.fromTo(
    menuContainer,
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
    "-=0.1"
  );

  // Stagger de links
  const links = menuContainer.querySelectorAll("button[data-link]");
  if (links.length > 0) {
    tl.fromTo(
      links,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.15"
    );
  }

  return tl;
};

export const animateMobileMenuOut = (
  menuContainer: HTMLElement,
  overlay: HTMLElement
): gsap.core.Timeline => {
  const tl = gsap.timeline();

  // Menu fade out rápido
  tl.to(menuContainer, {
    opacity: 0,
    y: -20,
    duration: 0.2,
    ease: "power2.in",
  });

  // Overlay fade out
  tl.to(
    overlay,
    { opacity: 0, duration: 0.15, ease: "power2.in" },
    "-=0.1"
  );

  return tl;
};
