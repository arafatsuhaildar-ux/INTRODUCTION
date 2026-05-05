const stars = document.querySelectorAll('.stars');
const typewriterText = document.querySelector('.typewriter-text');
const fadeTargets = document.querySelectorAll('.fade-on-scroll');

const typeLines = [
  'I am an ethical hacker.',
  'I trace vulnerabilities.',
  'I build secure digital systems.',
  'I turn code into a cyber edge.'
];
let currentLine = 0;
let currentChar = 0;
let typing = true;

function randomizeStars() {
  stars.forEach((layer, index) => {
    layer.style.backgroundImage = `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255,255,255,${0.16 + index * 0.05}), 0), radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255,255,255,${0.08 + index * 0.04}), 0)`;
  });
}

function typeWriter() {
  const currentText = typeLines[currentLine];

  if (typing) {
    currentChar += 1;
    typewriterText.textContent = currentText.slice(0, currentChar);

    if (currentChar === currentText.length) {
      typing = false;
      setTimeout(typeWriter, 1400);
      return;
    }
  } else {
    currentChar -= 1;
    typewriterText.textContent = currentText.slice(0, currentChar);

    if (currentChar === 0) {
      typing = true;
      currentLine = (currentLine + 1) % typeLines.length;
      setTimeout(typeWriter, 500);
      return;
    }
  }

  setTimeout(typeWriter, typing ? 80 : 40);
}

function handleScrollFade() {
  const offset = Math.min(window.scrollY / 220, 1);
  fadeTargets.forEach((element) => {
    element.style.opacity = `${1 - offset}`;
    element.style.transform = `translateY(${offset * 18}px)`;
  });
}

window.addEventListener('load', () => {
  randomizeStars();
  setInterval(randomizeStars, 12000);
  typeWriter();
  handleScrollFade();
});

window.addEventListener('scroll', handleScrollFade);
