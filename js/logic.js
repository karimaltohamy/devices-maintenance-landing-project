// Select the circle element
const circleElement = document.getElementById("circle");
// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position
// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value
// Update mouse position on the 'mousemove' event
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  circleElement.style.display = "block";
});
// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;
// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;
  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
};
// display none when mouse out
window.addEventListener("mouseout", (e) => {
  circleElement.style.display = "none";
});
// Start the animation loop
tick();

// start team slider
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  loop : true ,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// start team slider

// start hover text
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelectorAll(".special").forEach((ele) => {
  ele.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 70);
  };
});
// end hover text


// start Comments slider 
var swiper = new Swiper(".mySwiperCube", {
  effect: "cube",
  grabCursor: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  loop : true ,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 0,
    shadowScale: 0,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
// end Comments slider 
