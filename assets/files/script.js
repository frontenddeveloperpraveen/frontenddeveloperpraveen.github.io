// Observer usage
let options = {
  root: null,
  threshold: 1.0,
  rootMargin: "0px",
};
let callback = (entries, Observer) => {
  entries.forEach((element) => {
    if (element.target.id == "about-video") {
      if (element.isIntersecting) {
        element.target.play();
      } else {
        element.target.pause();
      }
    }
  });
};
let Observer = new IntersectionObserver(callback, options);
Observer.observe(document.querySelector("#about-video"));

let mob = document.querySelector("#mob-view-burger");
function dialog_box() {
  mob.classList.toggle("hidden");
}

const closeBanner = () => {
  let mob = document.querySelector("#mob-view-burger");
  mob.classList.toggle("hidden");
};
