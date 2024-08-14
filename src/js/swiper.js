(() => {
  const swiper = new Swiper(".swiper", {
    pagination: false,
    navigation: false,
    scrollbar: false,
  });

  function onSlide(button) {
    const slideIndex = button.getAttribute("data-slide");
    swiper.slideTo(slideIndex);
  }

  document.querySelectorAll(".hero__btn").forEach((button) => {
    button.addEventListener("mouseenter", () => onSlide(button));
    button.addEventListener("keyup", (e) => {
      if (e.key === "Tab") onSlide(link);
    });
  });

  swiper.on("slideChange", function () {
    document
      .querySelectorAll(".hero__btn")
      .forEach((btn) => btn.classList.remove("btn_active"));
    document
      .querySelector(`.hero__btn[data-slide="${swiper.activeIndex}"]`)
      .classList.add("btn_active");
  });

  const swiperSlidesAriaLabels = [
    "Двое мужчин играют в баскет",
    "Дети играют в баскетбол",
    "Девушки играют в баскетбол",
  ];

  document
    .querySelector('.hero__btn[data-slide="0"]')
    .classList.add("btn_active");

  swiper.slides.forEach((slide, index) => {
    slide.setAttribute(
      "aria-label",
      `Изображение ${index + 1} из ${swiper.slides.length} : ${
        swiperSlidesAriaLabels[index]
      }`
    );
  });
})();
