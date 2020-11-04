function testrecall() {

var slider = new Swiper('.slider', {
    effect: 'coverflow',
    speed: 1000,
    loop: true,
    mousewheel: true,
    fadeEffect: {
        crossFade: true
    },
    keyboard: {
        enabled: true,
    },
});

const menuBurger = document.querySelector('.menu__burger');

function openMenuBurger() {
    menuBurger.classList.toggle('menu__burger--open');
}

menuBurger.addEventListener("click", openMenuBurger);

const switcherDark = document.querySelector('.switcher__dark');
const switcherLight = document.querySelector('.switcher__light');

function dark_mode() {
    document.body.classList.remove('body--light');
    document.body.classList.add('body--dark');
}

function light_mode() {
    document.body.classList.remove('body--dark');
    document.body.classList.add('body--light');
}

switcherDark.addEventListener("click", dark_mode);
switcherLight.addEventListener("click", light_mode);
}

testrecall();

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
}

  function pageTransition() {
   var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
        backgroundColor:'rgb(255,255,255)'
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        backgroundColor:'rgb(255,255,255)',
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

$(function () {
barba.init({
  sync:true,
  transitions: [{

    async enter({ next }) {
    contentAnimation();
    },


    async once({ next }) {
      contentAnimation();
    },
    async beforeEnter({ next }) {
      testrecall();

    },
    async leave({ next }) {
       const done = this.async();
        pageTransition();
        await delay(1000);
        done();
    },
  }]
});
});