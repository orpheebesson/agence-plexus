function testrecall() {

    const menuBurger = document.querySelector('.menu__burger');
    const menuRight = document.querySelector('.menuRight');
    const mainContainer = document.querySelector('[data-barba="wrapper"]');

    menuBurger.classList.remove('menu__burger--open');
    menuRight.classList.remove('menuRight--open');
    mainContainer.classList.remove('blur');
    document.body.classList.remove('bodyMenu--open');

    function openMenuBurger() {
        menuBurger.classList.toggle('menu__burger--open');
        menuRight.classList.toggle('menuRight--open');
        mainContainer.classList.toggle('blur');
        document.body.classList.toggle('bodyMenu--open');
    }

    menuBurger.addEventListener("click", openMenuBurger);

    function closeMenuBurger() {
        if (menuRight.classList.contains('menuRight--open')) {
            menuBurger.classList.remove('menu__burger--open');
            menuRight.classList.remove('menuRight--open');
            mainContainer.classList.remove('blur');
            document.body.classList.remove('bodyMenu--open');
        }
    }

    // function closeMenuBurgerOnClickOutside(event) {
    //     if (!event.target.closest('.menuRight')) {
    //         closeMenuBurger();
    //         event.stopImmediatePropagation();
    //         document.onclick = avoidFirstClick;
    //     }
    // }

    function closeMenuBurgerOnPressEscape(event) {
        if (event.keyCode == 27) {
            closeMenuBurger();
        }
    }

    document.addEventListener("keyup", closeMenuBurgerOnPressEscape);

    // function avoidFirstClick(event) {
    //     event.stopImmediatePropagation();
    //     this.removeEventListener("click", avoidFirstClick);
    //     document.onclick = closeMenuBurgerOnClickOutside;
    // }

    // menuBurger.addEventListener("click", avoidFirstClick);

}

testrecall();

function lightAndDarkMode() {
    const switcherDark = document.querySelector('.switcher__dark');
    const switcherLight = document.querySelector('.switcher__light');

    function dark_mode() {
        if (!document.body.classList.contains('body--dark')) {
            document.body.classList.remove('body--light');
            document.body.classList.add('body--dark');
        } else {
            alert('Vous êtes dans la lune ! Vous êtes déjà en mode sombre.');
        }
    }

    function light_mode() {
        if (!document.body.classList.contains('body--light')) {
            document.body.classList.remove('body--dark');
            document.body.classList.add('body--light');
        } else {
            alert('Le soleil brille déjà pour vous.');
        }
    }

    switcherDark.addEventListener("click", dark_mode);
    switcherLight.addEventListener("click", light_mode);
}

lightAndDarkMode();

function menu() {

    const menuBurger = document.querySelector('.menu__burger');
    const menuRight = document.querySelector('.menuRight');
    const mainContainer = document.querySelector('[data-barba="wrapper"]');

    menuBurger.classList.remove('menu__burger--open');
    menuRight.classList.remove('menuRight--open');
    mainContainer.classList.remove('blur');

    function openMenuBurger() {
        menuBurger.classList.toggle('menu__burger--open');
        menuRight.classList.toggle('menuRight--open');
        mainContainer.classList.toggle('blur');
        document.body.classList.toggle('bodyMenu--open');
    }

    menuBurger.addEventListener("click", openMenuBurger);

    function closeMenuBurger() {
        if (menuRight.classList.contains('menuRight--open')) {
            menuBurger.classList.remove('menu__burger--open');
            menuRight.classList.remove('menuRight--open');
            mainContainer.classList.remove('blur');
            document.body.classList.remove('bodyMenu--open');
        }
    }

    function closeMenuBurgerOnPressEscape(event) {
        if (event.keyCode == 27) {
            closeMenuBurger();
        }
    }

    document.addEventListener("keyup", closeMenuBurgerOnPressEscape);
}

function homeParallax() {
    if (document.getElementById('scene') &&
        document.getElementById('scene1') &&
        document.getElementById('scene2') &&
        document.getElementById('scene3') &&
        document.getElementById('scene4')) {

        if (window.innerWidth >= 992) {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene, {
                pointerEvents: true
            });

            var scene1 = document.getElementById('scene1');
            var parallaxInstance1 = new Parallax(scene1, {
                pointerEvents: true
            });

            var scene2 = document.getElementById('scene2');
            var parallaxInstance2 = new Parallax(scene2, {
                pointerEvents: true
            });

            var scene3 = document.getElementById('scene3');
            var parallaxInstance3 = new Parallax(scene3, {
                pointerEvents: true
            });

            var scene4 = document.getElementById('scene4');
            var parallaxInstance4 = new Parallax(scene4, {
                pointerEvents: true
            });
        }
    }
}

homeParallax();

function membersCarousel() {
    if (document.querySelector('.slider')) {
        var slider = new Swiper('.slider', {
            effect: 'coverflow',
            speed: 1000,
            loop: true,
            fadeEffect: {
                crossFade: true
            },
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        });

        if (window.innerWidth >= 768) {
            slider.mousewheel.enable();
        }
    }
}

membersCarousel();

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
    tl.set(".loading-screen", {
        left: "-100%"
    });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.4,
        delay: 0.2
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
        backgroundColor: 'rgb(255,255,255)'
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        backgroundColor: 'rgb(255,255,255)',
        delay: 0.3,
    });
    tl.set(".loading-screen", {
        left: "-100%"
    });
}

$(function () {
    barba.init({
        sync: true,
        transitions: [{
            async enter({
                next
            }) {
                contentAnimation();
            },

            async once({
                next
            }) {
                contentAnimation();
            },
            async beforeEnter({
                next
            }) {
                testrecall();
                menu();
                membersCarousel();
                homeParallax();
            },
            async leave({
                next
            }) {
                const done = this.async();
                pageTransition();
                await delay(1000);
                done();
            },

        }],
    });
});