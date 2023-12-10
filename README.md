# javascript-countup-animation

A JavaScript function to display incrementing numbers.

animateCountUp(element, duration, stepSize, startingValue)


 <div class="section">
        <h2>animateCountUp(element, duration, stepSize, startingValue)</h2>
        <ul>
          <li>
            <b>element</b> - HTML element that contains a number to be animated.
            This number can be an integer (<em>i.e.</em> 1, 42, 23...) or have 1
            or 2 decmimal points (<em>i.e.</em> 23.9, 9.04...)
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
      </div>
First, import the module:

