gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
//section 1
const sectionOneTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".content",
    start: "top bottom",
    end: "bottom center",
    //scrub: true,
  },
});

sectionOneTl
  .fromTo(
    ".content span:first-child",
    { x: -300, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
  )
  .fromTo(
    ".content span:last-child",
    { x: 300, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
    "<"
  )
  .fromTo(
    ".content p",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
  )
  .fromTo(
    ".content img",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
  );

//section 2
const sectionTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top",
    end: "bottom",
    //scrub: true,
  },
});

sectionTwoTl
  .from(".section2 span", {
    opacity: 0,
    y: -50,
    duration: 1,
    stagger: 0.6,
    ease: "power2.out",
  })
  .fromTo(
    ".section2 p",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  );

// section 3

const sectionThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    //pin: true,
  },
});

sectionThreeTl
  .fromTo(
    ".section3 h2",
    { x: -200, opacity: 0, duration: 1 },
    { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
  )
  .fromTo(
    ".section3 span",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      backgroundColor: "white",
      color: "black",
      stagger: 0.2,
    },
    "<"
  );

const sectionFourTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top",
    scrub: 2,
    pin: true,
  },
});

//xPercent
//section 4
sectionFourTl
  .to(
    ".horizontal-sections ",
    { xPercent: -50, duration: 1, ease: "none" }
    //{ xPercent: 0, opacity: 1, duration: 1, ease: "power2.out" }
  )
  .fromTo(
    ".portfolio-item",
    { x: 200, opacity: 0 },
    { x: 0, opacity: 1, stagger: 0.6, duration: 1, ease: "power2.out" }
  );

//section 5
const selector = document.querySelector(".section5 h2");
const letters = selector.textContent.split("");
selector.innerHTML = "";

letters.forEach((el) => {
  const span = document.createElement("span");
  span.style.minWidth = "1.5rem";
  span.innerHTML = el;
  selector.appendChild(span);
});

const sectionFiveTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top",
    end: "bottom",
    scrub: true,
    pin: true,
  },
});

sectionFiveTl
  .from(".section5 span", { y: "-100vh", opacity: 0, stagger: 0.1 })
  .fromTo(
    ".section5 p",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  )
  .fromTo(
    ".contact-btn",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  )
  .to(".section5", {
    backgroundColor: "black",
  });
