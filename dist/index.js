// const animateCountUp = (
//   el,
//   duration,
//   step,
//   startingValue,
//   onAnimationComplete
// ) => {
//   // The animation function:
//   const animationDuration = duration ?? 10000;
//   // Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
//   const frameDuration = 1000 / 60;
//   // Use that to calculate how many frames we need to complete the animation
//   const totalFrames = Math.round(animationDuration / frameDuration);
//   // An ease-out function that slows the count as it progresses
//   const easeOutQuad = (t) => t * (2 - t);

//   if (el.innerText > Math.floor(el.innerText)) {
//     let frame = 0;
//     const countTo = parseFloat(el.innerText, 10);

//     // if input has 2 decimal places:
//     if (el.innerText.split(".")[1].length === 2) {
//       const counter = setInterval(() => {
//         frame++;
//         const progress = easeOutQuad(frame / totalFrames);
//         const currentCount = parseFloat(
//           countTo * progress + startingValue,
//           10
//         ).toFixed(2);

//         if (parseFloat(el.innerText, 10) !== currentCount) {
//           el.innerText = currentCount;
//         }
//         if (startingValue === null) {
//           if (frame === totalFrames) {
//             clearInterval(counter);
//             // Call the onAnimationComplete callback when the animation is complete
//             if (onAnimationComplete) onAnimationComplete();
//           }
//         }
//         if (startingValue !== null) {
//           if (Number(currentCount) >= countTo) {
//             el.innerText = countTo;
//             clearInterval(counter);
//             // Call the onAnimationComplete callback when the animation is complete
//             if (onAnimationComplete) onAnimationComplete();
//           }
//         }
//       }, frameDuration);
//       // or, if it has one decimal:
//     } else if (el.innerText.split(".")[1].length === 1) {
//       // Start the animation running 60 times per second
//       const counter = setInterval(() => {
//         frame++;
//         const progress = easeOutQuad(frame / totalFrames);
//         const currentCount = parseFloat(
//           countTo * progress + startingValue,
//           10
//         ).toFixed(1);

//         if (parseFloat(el.innerText, 10) !== currentCount) {
//           el.innerText = currentCount;
//         }
//         if (startingValue === null) {
//           if (frame === totalFrames) {
//             clearInterval(counter);
//             // Call the onAnimationComplete callback when the animation is complete
//             if (onAnimationComplete) onAnimationComplete();
//           }
//         }
//         if (startingValue !== null) {
//           if (Number(currentCount) >= countTo) {
//             el.innerText = countTo;
//             clearInterval(counter);
//             // Call the onAnimationComplete callback when the animation is complete
//             if (onAnimationComplete) onAnimationComplete();
//           }
//         }
//       }, frameDuration);
//     }
//     // or, it is NOT a decimal - (this also supports a different step size):
//   } else {
//     let frame = 0;
//     const countTo = parseInt(el.innerText, 10);
//     const counter = setInterval(() => {
//       frame++;
//       const progress = easeOutQuad(frame / totalFrames);

//       let currentCount;
//       if (step !== null)
//         currentCount =
//           Math.floor((countTo * progress + step - 1) / step) * step;
//       else currentCount = Math.round(countTo * progress) + startingValue;

//       // If the current count has changed, update the element
//       if (parseInt(el.innerText, 10) !== currentCount) {
//         el.innerText = currentCount;
//       }
//       if (startingValue === null) {
//         if (frame === totalFrames) {
//           clearInterval(counter);
//           // Call the onAnimationComplete callback when the animation is complete
//           if (onAnimationComplete) onAnimationComplete();
//         }
//       }
//       if (startingValue !== null) {
//         if (Number(currentCount) >= countTo) {
//           el.innerText = countTo;
//           clearInterval(counter);
//           // Call the onAnimationComplete callback when the animation is complete
//           if (onAnimationComplete) onAnimationComplete();
//         }
//       }
//     }, frameDuration);
//   }
// };

// export default animateCountUp;

//works with startingValue:
// const animateCountUp = (
//   el,
//   duration,
//   step,
//   startingValue,
//   onAnimationComplete
// ) => {
//   const animationDuration = duration ?? 10000;
//   const frameDuration = 1000 / 60;
//   const totalFrames = Math.round(animationDuration / frameDuration);
//   const easeOutQuad = (t) => t * (2 - t);

//   let frame = 0;
//   const countTo = parseFloat(el.innerText, 10);
//   const isDecimal = el.innerText.includes(".");
//   const decimalPlaces = isDecimal ? el.innerText.split(".")[1].length : 0;

//   const counter = setInterval(() => {
//     frame++;
//     const progress = easeOutQuad(frame / totalFrames);
//     let currentCount;

//     if (isDecimal) {
//       currentCount = parseFloat(countTo * progress + startingValue).toFixed(
//         decimalPlaces
//       );
//     } else {
//       currentCount = Math.round(countTo * progress + startingValue);
//     }

//     if (parseFloat(el.innerText, 10) !== currentCount) {
//       el.innerText = currentCount;
//     }

//     const isAnimationComplete =
//       (startingValue === null && frame === totalFrames) ||
//       (startingValue !== null && Number(currentCount) >= countTo);

//     if (isAnimationComplete) {
//       clearInterval(counter);
//       if (onAnimationComplete) onAnimationComplete();
//     }
//   }, frameDuration);
// };

//SUPPORTS STEP SIZE AND STARTING VALUE !!!
const animateCountUp = (
  el,
  duration,
  step,
  startingValue,
  onAnimationComplete
) => {
  const animationDuration = duration ?? 10000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOutQuad = (t) => t * (2 - t);

  let frame = 0;
  const countTo = parseFloat(el.innerText, 10);
  const isDecimal = el.innerText.includes(".");
  const decimalPlaces = isDecimal ? el.innerText.split(".")[1].length : 0;

  const counter = setInterval(() => {
    frame++;
    const progress = easeOutQuad(frame / totalFrames);
    let currentCount;

    if (isDecimal) {
      currentCount = parseFloat(countTo * progress + startingValue).toFixed(
        decimalPlaces
      );
    } else {
      if (step !== null) {
        //addded startingValue to line 196
        currentCount =
          Math.floor((countTo * progress + startingValue + step - 1) / step) *
          step;
      } else {
        currentCount = Math.round(countTo * progress) + startingValue;
      }
    }

    if (parseFloat(el.innerText, 10) !== currentCount) {
      el.innerText = currentCount;
    }

    const isAnimationComplete =
      (startingValue === null && frame === totalFrames) ||
      (startingValue !== null && Number(currentCount) >= countTo);

    if (isAnimationComplete) {
      clearInterval(counter);
      if (onAnimationComplete) onAnimationComplete();
    }
  }, frameDuration);
};

export default animateCountUp;
