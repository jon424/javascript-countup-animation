# JavaScript Count-up Animation 🔢 🚀

A JavaScript function to display incrementing numbers. [See a live website with this function and complete documentation here.](https://countup-animation.netlify.app/)



## animateCountUp(element, duration, stepSize, startingValue)

<ul>
<li>
<b>element</b> - HTML element that contains a number to be animated.This number can be an integer (<em>i.e.</em> 1, 42, 23...) or have any number of decimal points (<em>i.e.</em> 23.9, 9.042...)
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

## Using `animateCountUp()`
First, import the module:

**JavaScript**
```js
 import animateCountUp from "./dist/index.js";
```

Then call the function by targeting an HTML element:

**HTML**
```html
<h1>JavaScript Count-up Animation...<span id="one-hundred"> 100</span></h1>
```
**JavaScript**
```js
// count to 100 on page load
document.addEventListener("DOMContentLoaded", () => {
    const countToOneHundred = document.getElementById("one-hundred");
    animateCountUp(countToOneHundred, 5000, null, null, null);
});
```
## More examples...

You can also use `animateCountUp()` with multiple numbers within a container element. For this example, we will use a container `<div>` and run the animation on each number within
that container that has the `.countup` class. Note that you can
have other elements with other classnames that won't interfere with
the functionality, so we have added additional `<span>` tags that contain `.before-number` and `.after-number` classes. This is to
show that we can have other characters such as dollar signs or any
other type of text that you don't want to count up:


**HTML**
```html
<div id="container">
  <ul>
    <li>
      <span class="before-number">$</span>
      <span class="countup">45.23</span>
      <span class="after-number">+</span>
    </li>
    <li>
      <span class="countup">91.123</span>
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

**JavaScript**
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
<br>

---

<br>
This next example is very similar to the first example, with different arguments passed into animateCountUp(), and starting each animation 500ms after the previous one by updating the setTimeout() function:

<br>

**HTML**
```html
<div id="container-two" class="example-two">
  <div class="card">
    <span class="before-number">$</span>
    <span id="countupTwo" class="countup">200</span>
    <span class="after-number">+</span>
  </div>
  <div class="card">
    <span id="countupThree" class="countup">18.76</span>
    <span class="after-number">%</span>
  </div>
  <div class="card">
    <span class="before-number">😎</span>
    <span id="countupFour" class="countup">185.32</span>
    <span class="after-number">!</span>
  </div>
</div>

<button id="animateButtonTwo">Animate</button>
```

**JavaScript**
```js
 document
.getElementById("animateButtonTwo")
.addEventListener("click", () => {
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
```
<br>

## On Scroll

This function can also be triggered on scroll using JavaScript's Intersection Observer API:

<br>

**HTML**
```html
<div id="container-three">
    <h2>This example is triggered on scroll</h2>
    <ul>
      <li>
        <span class="before-number">$</span>
        <span id="countupTwo" class="countup">200</span>
        <span class="after-number">+</span>
      </li>
      <li>
        <span id="countupThree" class="countup">304.7</span>
        <span class="after-number">%</span>
      </li>
      <li>
        <span class="before-number">+</span>
        <span id="countupFour" class="countup">430.32</span>
        <span class="after-number">!</span>
      </li>
    </ul>
  </div>
```

**JavaScript**
```js
const containerObserver = new IntersectionObserver((entries) => {
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
  
  // Observe the container div
  containerObserver.observe(
    document.getElementById("container-three")
  );
```
<br>

---

<br>

Live site with examples and documentation:
https://jon424.github.io/javascript-countup-animation/

