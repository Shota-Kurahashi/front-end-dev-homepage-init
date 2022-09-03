class Main {
  constructor() {
    (this.header = document.querySelector(".header")),
      (this.hero = new HeroSlider(".swiper")),
      (this.sides = document.querySelectorAll(".side")),
      (this._observers = []),
      this._init();
  }
  _scrollInit() {
    this._observers.push(
      new ScrollObserver(".nav-trigger", this._navAnimation.bind(this), {
        once: !1,
      }),
      new ScrollObserver("#main-content", this._sideAnimation.bind(this), {
        once: !1,
        rootMargin: "-300px 0px",
      }),
      new ScrollObserver(".swiper", this._toggleSlideAnimation.bind(this), {
        once: !1,
      }),
      new ScrollObserver(".cover-slide", this._inviewAnimation),
      new ScrollObserver(".appear", this._inviewAnimation),
      new ScrollObserver(".tween-animate-title", this._textAnimation)
    );
  }
  _init() {
    Pace.on("done", this._scrollInit.bind(this)), new MobileMenu();
  }
  _toggleSlideAnimation(b, a) {
    a ? this.hero.start() : this.hero.stop();
  }
  _textAnimation(a, b) {
    if (b) {
      let c = new TweenTextAnimation(a);
      c.animate();
    }
  }
  _navAnimation(b, a) {
    a
      ? this.header.classList.remove("triggered")
      : this.header.classList.add("triggered");
  }
  _sideAnimation(b, a) {
    a
      ? this.sides.forEach((a) => a.classList.add("inview"))
      : this.sides.forEach((a) => a.classList.remove("inview"));
  }
  _inviewAnimation(a, b) {
    b ? a.classList.add("inview") : a.classList.remove("inview");
  }
}
new Main();
