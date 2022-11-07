const text = document.querySelector(".loading-text");
const blur = document.querySelector(".blur");
const bgImg = document.querySelector(".bg-img");
const heading = document.querySelector(".heading");

let load = 0;

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  text.innerHTML = `${load}%`;
  blur.style.opacity = scale(load, 0, 100, 1, 0);
  blur.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  if (load === 100) {
    text.innerHTML = "";
  }
};

// from StackOverflow
const scale = (num, min_in, max_in, min_out, max_out) => {
  return ((num - min_in) * (max_out - min_out)) / (max_in - min_in) + min_out;
};

let int = setInterval(blurring, 30);

const fading = () => {
  let increment = 0.02;
  let opacity = 0;
  let int = setInterval(() => {
    heading.style.opacity = opacity;
    opacity += increment;
    if (opacity > 1) {
      clearInterval(int);
    }
  }, 100);
};

fading();
