@tailwind base;
@tailwind components;
@tailwind utilities;

/* Existing animations */
.animate-gradient-vertical {
  background-size: 100% 200%;
  animation: gradient-vertical 3s infinite linear;
}

.animate-gradient-horizontal {
  background-size: 200% 100%;
  animation: gradient-horizontal 3s infinite linear;
}

/* Hanging Animation */
@keyframes hanging {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.animate-hanging {
  animation: hanging 2s ease-in-out infinite;
}

/* Neon Shadow for Section 5 */
.shadow-highlight {
  box-shadow: 0 0 20px cyan, 0 0 40px cyan, 0 0 80px cyan;
}

/* New Loader Styles */
:root {
  --hue: 223;
  --bg: hsl(var(--hue),90%,95%);
  --fg: hsl(var(--hue),90%,5%);
  --trans-dur: 0.3s;
}

.ip__track {
  stroke: hsl(var(--hue),90%,90%);
  transition: stroke var(--trans-dur);
}

.ip__worm1,
.ip__worm2 {
  animation: worm1 2s linear infinite;
}

.ip__worm2 {
  animation-name: worm2;
}

/* Animation */
@keyframes worm1 {
  from {
    stroke-dashoffset: 0;
  }
  50% {
    animation-timing-function: steps(1);
    stroke-dashoffset: -358;
  }
  50.01% {
    animation-timing-function: linear;
    stroke-dashoffset: 358;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes worm2 {
  from {
    stroke-dashoffset: 358;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -358;
  }
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue),90%,5%);
    --fg: hsl(var(--hue),90%,95%);
  }
  .ip__track {
    stroke: hsl(var(--hue),90%,15%);
  }
}

/* Polka Dots for the Black Side */
.black-background {
  background-color: black;
  position: relative;
}

.black-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(173, 216, 230, 0.3) 4px, transparent 4px);
  background-size: 8px 8px; /* Reduced size of dots */
  background-repeat: repeat;
  pointer-events: none; /* Ensures it doesn't interfere with clicking */
}
