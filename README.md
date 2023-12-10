# javascript-countup-animation

A JavaScript function to display incrementing numbers. [See a live website with this function and complete documentation here.](https://jon424.github.io/javascript-countup-animation/)


## animateCountUp(element, duration, stepSize, startingValue)

<ul>
<li>
<b>element</b> - HTML element that contains a number to be animated.This number can be an integer (<em>i.e.</em> 1, 42, 23...) or have 1 or 2 decmimal points (<em>i.e.</em> 23.9, 9.04...)
</li>
<li>
<b>duration</b> - total length of time of the animation in
milliseconds. 10000 is the default.
</li>
<li>
<b>stepSize</b> - the increment by which the numbers are increased.
If the step size is <b>3</b>, then the counting would look like:
<b>3, 6, 9, 12...</b> This feature only works if the number you are
counting up to is an integer.
</li>
<li><b>startingValue</b> - The starting number.</li>
</ul>


First, import the module:

```
 import animateCountUp from "./dist/index.js";
```

Then call the function by targeting an HTML element:

HTML:
```html
<h1>JavaScript Count-up Animation...<span id="one-hundred"> 100</span></h1>
```
JavaScript:
```js
// count to 100 on page load
document.addEventListener("DOMContentLoaded", () => {
    const countToOneHundred = document.getElementById("one-hundred");
    animateCountUp(countToOneHundred, 5000, null, null, null);
});
```

Can also use with multiple numbers within a container element:

HTML:
```html
<div id="container">
  <ul>
    <li>
      <span class="before-number">$</span>
      <span class="countup">45.23</span>
      <span class="after-number">+</span>
    </li>
    <li>
      <span class="countup">91.1</span>
      <span class="after-number">%</span>
    </li>
    <li>
      <span class="before-number">₣</span>
      <span class="countup">42</span>
      <span class="after-number">!</span>
    </li>
  </ul>
</div>

<div>
    <button id="animateButton">Animate</button>
</div>
```

JavaScript:
```js
 document
.getElementById("animateButton")
.addEventListener("click", () => {
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

```


Live site with examples and documentation:
https://jon424.github.io/javascript-countup-animation/

