import animateCountUp from "./dist/index.js";

// count to 100 on page load
document.addEventListener("DOMContentLoaded", () => {
  const countToOneHundred = document.getElementById("one-hundred");
  animateCountUp(countToOneHundred, 5000, null, null, null);
});

// example one
document.getElementById("animateButton").addEventListener("click", () => {
  animateButton.disabled = true;
  const container = document.querySelector("#container");
  const countupEls = container.querySelectorAll(".countup");
  const totalElements = countupEls.length;
  let completedAnimations = 0;

  countupEls.forEach((el, index) => {
    setTimeout(() => {
      animateCountUp(el, 7000, 7, null, () => {
        completedAnimations++;

        // Check if all animations are completed
        if (completedAnimations === totalElements) {
          console.log("Animation finished!");
          animateButton.disabled = false;
        }
      });
    }, index * 700);
  });
});

// example two
document.getElementById("animateButtonTwo").addEventListener("click", () => {
  animateButtonTwo.disabled = true;
  const container = document.querySelector("#container-two");
  const countupEls = container.querySelectorAll(".countup");
  const totalElements = countupEls.length;
  let completedAnimations = 0;
  countupEls.forEach((el, index) => {
    setTimeout(() => {
      animateCountUp(el, 3500, 1, 0, () => {
        completedAnimations++;
        if (completedAnimations === totalElements) {
          animateButtonTwo.disabled = false;
        }
      });
    }, index * 500);
  });
});

//Intersection Observer example
const containerThreeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const countupEls = entry.target.querySelectorAll(".countup");
      countupEls.forEach((el, index) => {
        setTimeout(() => {
          animateCountUp(el, 4000, 1, 0);
        }, index * 700);
      });

      containerThreeObserver.unobserve(entry.target);
    }
  });
});

containerThreeObserver.observe(document.getElementById("container-four"));
