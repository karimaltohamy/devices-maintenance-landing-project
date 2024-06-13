document.querySelector(".toggle").onclick = () => {
  document.querySelector(".parent").classList.toggle("show");
};

new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
  },
});




