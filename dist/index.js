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
